import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import "./Stake.css";
import WalletModal from "../wallet_modal/WalletModal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Token_Abi,
  Token_Contract,
  staking,
  staking_Abi,
} from "../../Contracts/contract";
import { toast } from "react-hot-toast";
import Web3 from "web3";

function Stake() {
  const [collection, setcollection] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [getValue, setgetValue] = useState("");
  const [Spinner, setSpinner] = useState(false);
  const [balance, setbalance] = useState(0);
  const [maxValue, setmaxValue] = useState(0);
  const [stakedAmount, setstakedAmount] = useState(0);
  const [pendindRewards, setpendindRewards] = useState(0);

  console.log("maxValue", maxValue);

  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );

  const webSupply = new Web3("https://bsc-testnet.public.blastapi.io");
  console.log("acc", acc);

  const handleButtonClick = (newData) => {
    setcollection(newData);
  };

  const Stake = async () => {
    try {
      if (getValue == "") {
        toast.error("Please Enter the token Value!");
      } else {
        setSpinner(true);

        let ContractOf = new web3.eth.Contract(staking_Abi, staking);
        let ContractOfToken = new web3.eth.Contract(Token_Abi, Token_Contract);
        let value = webSupply.utils.toWei(getValue.toString());
        // let value = getValue*1000000000000000000;

        console.log("getValue", value);

        await ContractOfToken.methods.approve(staking, value.toString()).send({
          from: acc,
        });
        toast.success("Approved Successfully! 🎉");
        await ContractOf.methods.farm(value, 360).send({
          from: acc,
        });
        toast.success("Amount Staked! 🎉");
        setSpinner(false);
      }
    } catch (error) {
      setSpinner(false);

      console.log(error);
    }
  };

  const UnStake = async () => {
    try {
      let stakingContractOf = new webSupply.eth.Contract(staking_Abi, staking);
      let userinfo = await stakingContractOf.methods.Users(acc).call();

      if (userinfo.DepositeToken > 0) {
        setSpinner(true);

        let ContractOf = new web3.eth.Contract(staking_Abi, staking);

        await ContractOf.methods.harvest().send({
          from: acc,
        });
        toast.success("Amount UnStaked! 🎉");
        setSpinner(false);
      } else {
        toast.success("Not Staked!");
        setSpinner(false);
      }
    } catch (error) {
      setSpinner(false);

      console.log(error);
    }
  };

  const Claim = async () => {
    try {
      let ContractOf = new web3.eth.Contract(staking_Abi, staking);
      let stakingContractOf = new webSupply.eth.Contract(staking_Abi, staking);
      let claimable = await stakingContractOf.methods
        .pendindRewards(acc)
        .call();

      if (claimable > 0) {
        setSpinner(true);

        await ContractOf.methods.claim().send({
          from: acc,
        });
        toast.success("Amount Claim! 🎉");
        setSpinner(false);
      } else {
        toast.success("No Claimables Found!");
        setSpinner(false);
      }
    } catch (error) {
      setSpinner(false);

      console.log(error);
    }
  };

  const checkBalance = async () => {
    const webSupply = new Web3("https://bsc-testnet.public.blastapi.io");

    let tokenContractOf = new webSupply.eth.Contract(Token_Abi, Token_Contract);
    let stakingContractOf = new webSupply.eth.Contract(staking_Abi, staking);

    if (acc != null) {
      let claimable = await stakingContractOf.methods
        .pendindRewards(acc)
        .call();
      claimable = web3.utils.fromWei(claimable);

      setpendindRewards(claimable);
      let userdata = await stakingContractOf.methods.Users(acc).call();
      let stakedAmount = userdata.DepositeToken;
      stakedAmount = web3.utils.fromWei(stakedAmount);

      let blanceOf = await tokenContractOf.methods.balanceOf(acc).call();
      blanceOf = web3.utils.fromWei(blanceOf);
      setbalance(parseFloat(blanceOf).toFixed(3));
      setstakedAmount(stakedAmount);
      console.log(blanceOf, "blanceOf");
      console.log(stakedAmount, "stakedAmount");
    }
  };

  useEffect(() => {
    checkBalance();
  });
  const showModal = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <>
      <WalletModal show={modalShow} onHide={closeModal} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <div className="ComingSoon_main">
          <h1 className="fw-bolder text-white pt-5">Stake $PEPEINC</h1>
          <p className="fs-5 pb-4 text-white">
            Stake your tokens and earn 20% APR
          </p>
          <div className="Stake_box">
            <div className="ComingSoon_box_btn">
              <button
                onClick={() => handleButtonClick(0)}
                className={collection == 0 ? "active" : "non_active"}
              >
                Stake
              </button>
              <button
                onClick={() => handleButtonClick(1)}
                className={collection == 1 ? "active" : "non_active"}
              >
                Unstake
              </button>
              <button
                onClick={() => handleButtonClick(2)}
                className={collection == 2 ? "active" : "non_active"}
              >
                Claim
              </button>
            </div>
            {collection == 0 ? (
              <>
                <div>
                  <form>
                    <input
                      className="Stake_input"
                      placeholder="Enter Tokens Amount"
                      value={getValue}
                      onChange={(e) => {
                        setgetValue(e.target.value);
                      }}
                    />
                    <button
                      class=" input_bttn MAX_btn"
                      tabindex="0"
                      type="button"
                      onClick={() => setmaxValue(balance)}
                    >
                      <p
                        class="MuiTypography-root MuiTypography-body1 css-1qhlbm"
                        style={{ cursor: "pointer" }}
                        onClick={() => setgetValue(balance)}
                      >
                        Max
                      </p>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                  </form>
                  <div className="stake_cnnct_main">
                    <button
                      class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1y334na"
                      tabindex="0"
                      type="button"
                      onClick={() => (acc == null ? showModal() : Stake())}
                    >
                      {acc == null ? (
                        <>
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1etrg7"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="WalletIcon"
                          >
                            <path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84l-3.49 2.93zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2z"></path>
                          </svg>
                          <p class="MuiTypography-root MuiTypography-body1 css-1qhlbm">
                            Connect
                          </p>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </>
                      ) : (
                        <>
                          {Spinner ? (
                            <>
                              <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </>
                          ) : (
                            "Stake"
                          )}
                        </>
                      )}
                    </button>
                  </div>
                  <div className="coming_hr_main">
                    <hr className="coming_hr" />
                  </div>

                  <div className="stake_spn_main">
                    <div className="stake_spn">
                      <span className="mini_txt">Staked Tokens:</span>
                      <span className="larg_txt">
                        <span className="green_txt">{stakedAmount}</span>{" "}
                        <span className="wht_txt">$PEPEINC</span>
                      </span>
                      <span className="mini_txt">Wallet Balance:</span>
                      <span className="larg_txt">
                        <span className="green_txt">{balance}</span>{" "}
                        <span className="wht_txt">$PEPEINC</span>
                      </span>
                    </div>
                    <div className="stake_spn">
                      <span className="mini_txt">Pool Status:</span>
                      <span className="larg_txt">
                        <span className="green_txt">. Online</span>
                      </span>
                      <span className="mini_txt">Total APR:</span>
                      <span className="larg_txt">
                        <span className="green_txt">20%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ) : collection == 1 ? (
              <>
                <div>
                  <div className="stake_cnnct_main mt-3">
                    <button
                      class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1y334na"
                      tabindex="0"
                      type="button"
                      onClick={() => (acc == null ? showModal() : UnStake())}
                    >
                      {acc == null ? (
                        <>
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1etrg7"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="WalletIcon"
                          >
                            <path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84l-3.49 2.93zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2z"></path>
                          </svg>
                          <p class="MuiTypography-root MuiTypography-body1 css-1qhlbm">
                            Connect
                          </p>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </>
                      ) : (
                        <>
                          {Spinner ? (
                            <>
                              <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </>
                          ) : (
                            "UnStake"
                          )}
                        </>
                      )}
                    </button>
                  </div>
                  <div className="coming_hr_main">
                    <hr className="coming_hr" />
                  </div>

                  <div className="stake_spn_main">
                    <div className="stake_spn">
                      <span className="mini_txt">Staked Tokens:</span>
                      <span className="larg_txt">
                        <span className="green_txt">{stakedAmount}</span>{" "}
                        <span className="wht_txt">$PEPEINC</span>
                      </span>
                      <span className="mini_txt">Wallet Balance:</span>
                      <span className="larg_txt">
                        <span className="green_txt">{balance}</span>{" "}
                        <span className="wht_txt">$PEPEINC</span>
                      </span>
                    </div>
                    <div className="stake_spn">
                      <span className="mini_txt">Pool Status:</span>
                      <span className="larg_txt">
                        <span className="green_txt">. Online</span>
                      </span>
                      <span className="mini_txt">Total APR:</span>
                      <span className="larg_txt">
                        <span className="green_txt">20%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="fs-5 pt-4 text-white">Your Reward : {pendindRewards} </p>
                  <div className="stake_cnnct_main mt-3">
                    <br />
                    <button
                      class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1y334na"
                      tabindex="0"
                      type="button"
                      onClick={() => (acc == null ? showModal() : Claim())}
                    >
                      {acc == null ? (
                        <>
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1etrg7"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="WalletIcon"
                          >
                            <path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84l-3.49 2.93zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2z"></path>
                          </svg>
                          <p class="MuiTypography-root MuiTypography-body1 css-1qhlbm">
                            Connect
                          </p>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </>
                      ) : (
                        <>
                          {Spinner ? (
                            <>
                              <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </>
                          ) : (
                            "Claim"
                          )}
                        </>
                      )}
                    </button>
                  </div>
                  <div className="coming_hr_main">
                    <hr className="coming_hr" />
                  </div>

                  <div className="stake_spn_main">
                    <div className="stake_spn">
                      <span className="mini_txt">Staked Tokens:</span>
                      <span className="larg_txt">
                        <span className="green_txt">{stakedAmount}</span>{" "}
                        <span className="wht_txt">$PEPEINC</span>
                      </span>
                      <span className="mini_txt">Wallet Balance:</span>
                      <span className="larg_txt">
                        <span className="green_txt">{balance}</span>{" "}
                        <span className="wht_txt">$PEPEINC</span>
                      </span>
                    </div>
                    <div className="stake_spn">
                      <span className="mini_txt">Pool Status:</span>
                      <span className="larg_txt">
                        <span className="green_txt">. Online</span>
                      </span>
                      <span className="mini_txt">Total APR:</span>
                      <span className="larg_txt">
                        <span className="green_txt">20%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Box>
    </>
  );
}

export default Stake;
