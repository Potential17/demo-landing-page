import { useEffect } from "react";
import styles from "./Component.module.css";

const Component = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <article className={styles.article} data-animate-on-scroll>
      <div className={styles.landingpageDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-328.svg"
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
        <div className={styles.logoDiv}>
          <div className={styles.laslesVPNDiv}>
            <span className={styles.laslesSpan}>Lasles</span>
            <b>VPN</b>
          </div>
          <img
            className={styles.standardCollection27}
            alt=""
            src="../standard-collection-27.svg"
          />
        </div>
        <div className={styles.youCanExploreTheFeaturesT}>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </div>
        <div className={styles.letsChooseThePackageThat}>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </div>
        <div className={styles.seeLaslesVPNEverywhereToMa}>
          <span>{`See `}</span>
          <span className={styles.laslesSpan}>LaslesVPN</span>
          <span>
            {" "}
            everywhere to make it easier for you when you move locations.
          </span>
        </div>
        <div className={styles.powerfullOnlineProtection}>
          Powerfull online protection.
        </div>
        <div className={styles.internetWithoutBorders}>
          Internet without borders.
        </div>
        <div className={styles.superchargedVPNDiv}>Supercharged VPN</div>
        <div className={styles.noSpecificTimeLimits}>
          No specific time limits.
        </div>
        <div className={styles.weProvideManyFeaturesYouC}>
          We Provide Many Features You Can Use
        </div>
        <div className={styles.chooseYourPlan}>Choose Your Plan</div>
        <div className={styles.hugeGlobalNetworkOfFastVP}>
          Huge Global Network of Fast VPN
        </div>
        <img className={styles.groupIcon} alt="" src="../group-1120.svg" />
        <img className={styles.groupIcon1} alt="" src="../group-1121.svg" />
        <img className={styles.groupIcon2} alt="" src="../group-1122.svg" />
        <img
          className={styles.bxbxsCheckCircleIcon}
          alt=""
          src="../bxbxscheckcircle.svg"
        />
        <div className={styles.rectangleDiv3} />
        <div className={styles.premiumPlanDiv}>Premium Plan</div>
        <div className={styles.moDiv}>
          <span className={styles.laslesSpan}>{`$12 `}</span>
          <span className={styles.moSpan}>/ mo</span>
        </div>
        <div className={styles.rectangleDiv4} />
        <div className={styles.standardPlanDiv}>Standard Plan</div>
        <div className={styles.moDiv1}>
          <span className={styles.laslesSpan}>{`$9 `}</span>
          <span className={styles.moSpan}>/ mo</span>
        </div>
        <div className={styles.rectangleDiv5} />
        <div className={styles.freePlanDiv}>Free Plan</div>
        <div className={styles.freeDiv}>Free</div>
        <div className={styles.buttonnonactselectDiv}>
          <div className={styles.rectangleDiv6} />
          <b className={styles.selectB}>Select</b>
        </div>
        <div className={styles.buttonnonactselectDiv1}>
          <div className={styles.rectangleDiv6} />
          <b className={styles.selectB1}>Select</b>
        </div>
        <div className={styles.buttonactselectDiv}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.rectangleDiv9} />
          <b className={styles.selectB1}>Select</b>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.productDiv}>Product</div>
          <div className={styles.downloadDiv}>{`Download `}</div>
          <div className={styles.pricingDiv}>Pricing</div>
          <div className={styles.locationsDiv}>Locations</div>
          <div className={styles.serverDiv}>Server</div>
          <div className={styles.countriesDiv}>Countries</div>
          <div className={styles.blogDiv}>Blog</div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.engageDiv}>Engage</div>
          <div className={styles.laslesVPNDiv1}>{`LaslesVPN ? `}</div>
          <div className={styles.fAQDiv}>FAQ</div>
          <div className={styles.tutorialsDiv}>Tutorials</div>
          <div className={styles.aboutUsDiv}>About Us</div>
          <div className={styles.privacyPolicyDiv}>Privacy Policy</div>
          <div className={styles.termsOfService}>Terms of Service</div>
        </div>
        <div className={styles.groupDiv2}>
          <div className={styles.groupDiv3}>
            <div className={styles.earnMoneyDiv}>Earn Money</div>
            <div className={styles.affiliateDiv}>Affiliate</div>
            <div className={styles.becomePartnerDiv}>Become Partner</div>
          </div>
        </div>
        <div className={styles.laslesVPNIsAPrivateVirtual}>
          <span className={styles.laslesSpan}>LaslesVPN</span>
          <span>
            {" "}
            is a private virtual network that has unique features and has high
            security.
          </span>
        </div>
        <div className={styles.laslesVPNDiv2}>
          <span>©2020Lasles</span>
          <span className={styles.laslesSpan}>VPN</span>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv10} />
          <div className={styles.theseAreTheStoriesOfOurC}>
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </div>
          <div className={styles.trustedByThousandsOfHappy}>
            Trusted by Thousands of Happy Customer
          </div>
          <div className={styles.rectangleDiv11} />
          <div className={styles.rectangleDiv12} />
          <div className={styles.rectangleDiv13} />
          <img className={styles.groupIcon3} alt="" src="../group-1300.svg" />
          <div className={styles.groupDiv5}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-175@2x.png"
            />
            <div className={styles.viezhRobertDiv}>Viezh Robert</div>
            <div className={styles.warsawPolandDiv}>Warsaw, Poland</div>
          </div>
          <div className={styles.groupDiv6}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1751@2x.png"
            />
            <div className={styles.yessicaChristyDiv}>Yessica Christy</div>
            <div className={styles.shanxiChinaDiv}>Shanxi, China</div>
          </div>
          <div className={styles.groupDiv7}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1752@2x.png"
            />
            <div className={styles.kimYoungJou}>Kim Young Jou</div>
            <div className={styles.seoulSouthKorea}>Seoul, South Korea</div>
          </div>
          <div className={styles.wowIAmVeryHappyToUse}>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </div>
          <div className={styles.iLikeItBecauseILikeToTr}>
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </div>
          <div className={styles.thisIsVeryUnusualForMyBu}>
            “This is very unusual for my business that currently requires a
            virtual private network that has high security.”.
          </div>
          <img
            className={styles.buttonnonactleftIcon}
            alt=""
            src="../buttonnonactleft.svg"
          />
          <img
            className={styles.buttonactrightIcon}
            alt=""
            src="../buttonactright.svg"
          />
          <div className={styles.div}>4.5</div>
          <img className={styles.groupIcon4} alt="" src="../group-1161.svg" />
          <div className={styles.groupDiv8}>
            <div className={styles.div1}>4.5</div>
            <img
              className={styles.groupIcon5}
              alt=""
              src="../group-11611.svg"
            />
          </div>
          <div className={styles.groupDiv9}>
            <div className={styles.div1}>4.5</div>
            <img
              className={styles.groupIcon5}
              alt=""
              src="../group-11612.svg"
            />
          </div>
        </div>
        <img
          className={styles.socmedFacebookIcon}
          alt=""
          src="../socmedfacebook.svg"
        />
        <img
          className={styles.socmedTwitterIcon}
          alt=""
          src="../socmedtwitter.svg"
        />
        <img
          className={styles.socmedInstagramIcon}
          alt=""
          src="../socmedinstagram.svg"
        />
        <img
          className={styles.sponsoredIcon}
          alt=""
          src="../sponsored@2x.png"
        />
        <img
          className={styles.hugeGlobalIcon}
          alt=""
          src="../huge-global.svg"
        />
        <div className={styles.groupDiv10}>
          <div className={styles.rectangleDiv14} />
          <div className={styles.groupDiv11}>
            <div className={styles.subscribeNowForGetSpecial}>
              Subscribe Now for Get Special Features!
            </div>
            <div className={styles.letsSubscribeWithUsAndFi}>
              Let's subscribe with us and find the fun.
            </div>
          </div>
          <div className={styles.buttonSubscribeNowDiv}>
            <div className={styles.rectangleDiv15} />
            <div className={styles.rectangleDiv16} />
            <b className={styles.subscribeNow}>Subscribe Now</b>
          </div>
        </div>
        <div className={styles.rectangleDiv17} />
        <div className={styles.rectangleDiv18} />
        <div className={styles.logoDiv1}>
          <div className={styles.laslesVPNDiv}>
            <span className={styles.laslesSpan}>Lasles</span>
            <b>VPN</b>
          </div>
          <img
            className={styles.standardCollection27}
            alt=""
            src="../standard-collection-271.svg"
          />
        </div>
        <div className={styles.pricingDiv1}>Pricing</div>
        <div className={styles.featuresDiv}>Features</div>
        <div className={styles.testimonialsDiv}>Testimonials</div>
        <div className={styles.aboutDiv}>About</div>
        <div className={styles.helpDiv}>Help</div>
        <div className={styles.signInDiv}>Sign In</div>
        <div className={styles.buttonsignupDiv}>
          <div className={styles.rectangleDiv19} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.wantAnythingToBeEasyWith}>
          <span className={styles.laslesSpan}>
            Want anything to be easy with
          </span>
          <b> LaslesVPN.</b>
        </div>
        <div className={styles.provideANetworkForAllYour}>
          <span>{`Provide a network for all your needs with ease and fun using `}</span>
          <span className={styles.laslesSpan}>{`LaslesVPN `}</span>
          <span>discover interesting features from us.</span>
        </div>
        <div className={styles.buttongetStartedDiv}>
          <div className={styles.rectangleDiv20} />
          <div className={styles.rectangleDiv16} />
          <b className={styles.getStartedB}>Get Started</b>
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.groupDiv13}>
            <div className={styles.locationsDiv1}>Locations</div>
            <b className={styles.b}>30+</b>
          </div>
        </div>
        <div className={styles.groupDiv14}>
          <div className={styles.usersDiv}>Users</div>
          <b className={styles.b}>90+</b>
        </div>
        <div className={styles.groupDiv15}>
          <div className={styles.groupDiv16}>
            <div className={styles.serversDiv}>Servers</div>
            <b className={styles.b}>50+</b>
          </div>
        </div>
        <img className={styles.vectorIcon} alt="" src="../vector-14.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector-15.svg" />
        <div className={styles.iconlocationDiv}>
          <div className={styles.rectangleDiv22} />
          <img className={styles.groupIcon7} alt="" src="../group-1215.svg" />
        </div>
        <div className={styles.iconuserDiv}>
          <div className={styles.rectangleDiv22} />
          <img className={styles.groupIcon7} alt="" src="../group-1216.svg" />
        </div>
        <img className={styles.iconServer} alt="" src="../iconserver.svg" />
        <div className={styles.groupDiv17}>
          <div className={styles.groupDiv18}>
            <div className={styles.encryptedConnectionDiv}>
              Encrypted Connection
            </div>
            <img className={styles.groupIcon9} alt="" src="../group-1223.svg" />
          </div>
          <div className={styles.groupDiv19}>
            <img
              className={styles.groupIcon10}
              alt=""
              src="../group-1224.svg"
            />
            <div className={styles.noTrafficLogs}>No Traffic Logs</div>
          </div>
          <div className={styles.groupDiv20}>
            <img
              className={styles.groupIcon11}
              alt=""
              src="../group-1225.svg"
            />
            <div className={styles.worksOnAllDevices}>Works on All Devices</div>
          </div>
          <div className={styles.groupDiv21}>
            <div className={styles.unlimitedBandwitchDiv}>
              Unlimited Bandwitch
            </div>
            <img
              className={styles.groupIcon12}
              alt=""
              src="../group-12231.svg"
            />
          </div>
        </div>
        <div className={styles.groupDiv22}>
          <div className={styles.groupDiv23}>
            <div className={styles.encryptedConnectionDiv1}>
              Encrypted Connection
            </div>
            <img
              className={styles.groupIcon13}
              alt=""
              src="../group-1227.svg"
            />
          </div>
          <div className={styles.groupDiv24}>
            <div className={styles.yesTrafficLogs}>Yes Traffic Logs</div>
            <img
              className={styles.groupIcon14}
              alt=""
              src="../group-1228.svg"
            />
          </div>
          <div className={styles.groupDiv25}>
            <div className={styles.worksOnAllDevices1}>
              Works on All Devices
            </div>
            <img
              className={styles.groupIcon15}
              alt=""
              src="../group-1229.svg"
            />
          </div>
          <div className={styles.groupDiv26}>
            <div className={styles.connectAnywareDiv}>Connect Anyware</div>
            <img
              className={styles.groupIcon16}
              alt=""
              src="../group-1230.svg"
            />
          </div>
          <div className={styles.groupDiv27}>
            <div className={styles.unlimitedBandwitchDiv1}>
              Unlimited Bandwitch
            </div>
            <img
              className={styles.groupIcon12}
              alt=""
              src="../group-1226.svg"
            />
          </div>
        </div>
        <div className={styles.groupDiv28}>
          <div className={styles.groupDiv29}>
            <div className={styles.encryptedConnectionDiv2}>
              Encrypted Connection
            </div>
            <img
              className={styles.groupIcon18}
              alt=""
              src="../group-1231.svg"
            />
          </div>
          <div className={styles.groupDiv30}>
            <div className={styles.yesTrafficLogs1}>Yes Traffic Logs</div>
            <img
              className={styles.groupIcon19}
              alt=""
              src="../group-1232.svg"
            />
          </div>
          <div className={styles.groupDiv31}>
            <div className={styles.worksOnAllDevices2}>
              Works on All Devices
            </div>
            <img
              className={styles.groupIcon20}
              alt=""
              src="../group-1233.svg"
            />
          </div>
          <div className={styles.groupDiv32}>
            <div className={styles.getNewFeatures}>Connect Anyware</div>
            <img
              className={styles.groupIcon21}
              alt=""
              src="../group-1234.svg"
            />
          </div>
          <div className={styles.groupDiv33}>
            <div className={styles.getNewFeatures}>Get New Features</div>
            <img
              className={styles.groupIcon21}
              alt=""
              src="../group-1236.svg"
            />
          </div>
          <div className={styles.groupDiv34}>
            <div className={styles.unlimitedBandwitchDiv1}>
              Unlimited Bandwitch
            </div>
            <img
              className={styles.groupIcon12}
              alt=""
              src="../group-1235.svg"
            />
          </div>
        </div>
        <img
          className={styles.illustration1Icon}
          alt=""
          src="../illustration-1@2x.png"
        />
        <img
          className={styles.illustrationStandardIcon}
          alt=""
          src="../illustrationstandard.svg"
        />
        <img
          className={styles.illustrationFreeIcon}
          alt=""
          src="../illustrationfree.svg"
        />
        <img
          className={styles.illustrationPremiumIcon}
          alt=""
          src="../illustrationpremium.svg"
        />
        <img
          className={styles.illustration2Icon}
          alt=""
          src="../illustration-2.svg"
        />
      </div>
    </article>
  );
};

export default Component;
