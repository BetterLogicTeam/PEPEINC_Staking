import React, { useState } from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
import "./Stake.css";

function Stake() {
  const [collection, setcollection] = useState(0);

  const handleButtonClick = (newData) => {
    setcollection(newData);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <div className="ComingSoon_main">
          <h1 className="fw-bolder text-white">Stake $PEPEINC</h1>
          <p className="fs-5 text-white">Stake your tokens and earn 20% APR</p>
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
                    />
                    <button className="input_bttn">Max</button>
                  </form>
                  <div className="stake_cnnct_main">
                    <button className="stake_cnnct">Connect</button>
                  </div>
                  <div className="coming_hr_main">
                    <hr className="coming_hr" />
                  </div>

                  <div className="stake_spn_main">
                    <div className="stake_spn">
                      <span className="mini_txt">Staked Tokens:</span>
                      <span className="larg_txt">
                        <span className="green_txt">0.0</span>{" "}
                        <span className="wht_txt">$PEPEINC</span>
                      </span>
                      <span className="mini_txt">Wallet Balance:</span>
                      <span className="larg_txt">
                        <span className="green_txt">0.0</span>{" "}
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
                  <div className="stake_cnnct_main mt-3">
                    <button className="stake_cnnct">Connect</button>
                  </div>
                  <div className="coming_hr_main">
                    <hr className="coming_hr" />
                  </div>

                  <div className="stake_spn_main">
                    <div className="stake_spn">
                      <span className="mini_txt">Staked Tokens:</span>
                      <span className="larg_txt">
                        <span className="green_txt">0.0</span>{" "}
                        <span className="wht_txt">$PEPEINC</span>
                      </span>
                      <span className="mini_txt">Wallet Balance:</span>
                      <span className="larg_txt">
                        <span className="green_txt">0.0</span>{" "}
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
