/** @format */

import styles from "./Layer1.module.css";
import Image from "next/image";

const Layer1 = () => {
  return (
    <section className={styles.container}>
      <section className={styles.left}>
        <div className={styles.layer1ImgDiv}>
          <Image src='/layer1Img.webp' alt='' layout='fill' />
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.narration}>
          <p className={styles.first}>DRIVE WITH LYFT</p>
          <p className={styles.second}>Set your own hours..</p>
          <p className={styles.third}>Earn on your own terms.</p>
          <p className={styles.fourth}>
            Maybe you’re saving up for school. Or keeping flexible hours to
            spend more time with your family. It’s a great time to get in the
            driver’s seat, connect with your community, and earn a little extra
            cash. Plus, you can tell people you’ve got the best boss in town:
            you
          </p>
        </div>

        <div className={styles.highlghtsDiv}>
          <div className={styles.ladder}>
            <div className={styles.childLadder1}>
              <div className={styles.grandChildLayer1}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-16 13h-3v-1h3v1zm5 0h-3v-1h3v1zm.32-4.377c-.383.239-.836.377-1.32.377-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c.484 0 .937.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.326 1.571.857 2.123zm4.68 4.377h-3v-1h3v1zm-2-4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm7 4h-3v-1h3v1z' />
                </svg>
              </div>
              <div className={styles.grandChildLayer2}>Reliable earnings</div>
            </div>

            <div className={styles.childLadder2}>
              {/* <div className={styles.grandChildLayer1}>
               
              </div> */}
              <div className={styles.grandChildLayer2}>
                Make money, keep your tips, and use in-app tools to help
                maximize your earnings.
              </div>
            </div>
          </div>

          <div className={styles.ladder}>
            <div className={styles.childLadder1}>
              <div className={styles.grandChildLayer1}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                >
                  <path d='M11 6v8h7v-2h-5v-6h-2zm10.854 7.683l1.998.159c-.132.854-.351 1.676-.652 2.46l-1.8-.905c.2-.551.353-1.123.454-1.714zm-2.548 7.826l-1.413-1.443c-.486.356-1.006.668-1.555.933l.669 1.899c.821-.377 1.591-.844 2.299-1.389zm1.226-4.309c-.335.546-.719 1.057-1.149 1.528l1.404 1.433c.583-.627 1.099-1.316 1.539-2.058l-1.794-.903zm-20.532-5.2c0 6.627 5.375 12 12.004 12 1.081 0 2.124-.156 3.12-.424l-.665-1.894c-.787.2-1.607.318-2.455.318-5.516 0-10.003-4.486-10.003-10s4.487-10 10.003-10c2.235 0 4.293.744 5.959 1.989l-2.05 2.049 7.015 1.354-1.355-7.013-2.184 2.183c-2.036-1.598-4.595-2.562-7.385-2.562-6.629 0-12.004 5.373-12.004 12zm23.773-2.359h-2.076c.163.661.261 1.344.288 2.047l2.015.161c-.01-.755-.085-1.494-.227-2.208z' />
                </svg>
              </div>
              <div className={styles.grandChildLayer2}>A flexible schedule</div>
            </div>

            <div className={styles.childLadder2}>
              {/* <div className={styles.grandChildLayer1}>
               
              </div> */}
              <div className={styles.grandChildLayer2}>
                Be your own boss and drive whenever it works for you.
              </div>
            </div>
          </div>

          <div className={styles.ladder}>
            <div className={styles.childLadder1}>
              <div className={styles.grandChildLayer1}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 24l3-9h-9l14-15-3 9h9l-14 15z' />
                </svg>
              </div>
              <div className={styles.grandChildLayer2}>Get paid promptly</div>
            </div>

            <div className={styles.childLadder2}>
              {/* <div className={styles.grandChildLayer1}>
               
              </div> */}
              <div className={styles.grandChildLayer2}>
                Cash out your earnings whenever you want with Express Pay and
                Lyft Direct
              </div>
            </div>
          </div>
        </div>

        <div className={styles.btnDiv}>
          <button className={styles.btn1}>Apply to drive</button>
          <button className={styles.btn2}>
            How driver pay works
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='9'
              height='9'
              viewBox='0 0 24 24'
            >
              <path d='M24 11.871l-5-4.871v3h-19v4h19v3z' />
            </svg>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Layer1;
