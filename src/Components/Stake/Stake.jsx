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
                    />
                    <button
                      class=" input_bttn MAX_btn"
                      tabindex="0"
                      type="button"
                    >
                      <p class="MuiTypography-root MuiTypography-body1 css-1qhlbm">
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
                    >
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
                    </button>
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
                    <button
                      class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1y334na"
                      tabindex="0"
                      type="button"
                    >
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
                    </button>
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
