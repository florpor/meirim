import React from "react";
import Wrapper from "../components/Wrapper";

import "./About.css";

import eyal from "../assets/team/eyal.png";
import talia from "../assets/team/talia.png";
import yonatan from "../assets/team/yonatan.png";
import ann from "../assets/team/ann.png";
import shira from "../assets/team/shira.png";
import gal from "../assets/team/gal.png";

const About = ({ me }) => {
    return (
        <Wrapper me={me}>
            <div className="container">
                <div class="row">
                    <div class="col-lg-4">
                        <h2>צוות מעירים</h2>
                        <p>
                            אנו פועלים לשינוי סדר היום במערכת התכנון וחותרים
                            להפרדת רשויות וייצוג הולם לכל שכבות האוכלוסייה תוך
                            שמירה על האינטרס הסביבתי. מעירים הנו פרויקט עצמאי.
                        </p>
                        <p class="short-desc">
                            אנחנו קבוצה עצמאית, קטנה ונחושה של אדריכלים, מתכנתים
                            ומעצבת שעובדת ימים ולילות בהתנדבות במטרה להגביר את
                            השקיפות במערכת התכנון ולעודד אקטיביזם עירוני. זה
                            הצוות שלנו:
                        </p>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-6 col-lg-4">
                                <div class="m-3 text-center">
                                    <img
                                        class="img-fluid"
                                        src={eyal}
                                        alt="איל מגדלוביץ"
                                    />
                                    <div class="d-block text-center">
                                        איל מגדלוביץ
                                    </div>
                                    אדריכל ומנהל מעירים
                                </div>
                            </div>
                            <div class="col-6 col-lg-4">
                                <div class="m-3 text-center">
                                    <img
                                        class="img-fluid"
                                        src={talia}
                                        alt="טליה מרגלית"
                                    />
                                    <div class="d-block text-center">
                                        דר' טליה מרגלית
                                    </div>
                                    אדריכלית, חוקרת ויועצת אקדמית
                                </div>
                            </div>
                            <div class="col-6 col-lg-4">
                                <div class="m-3 text-center">
                                    <img
                                        class="img-fluid"
                                        src={yonatan}
                                        alt="יונתן דורטהיימר"
                                    />
                                    <a
                                        href="http://dortheimer.com"
                                        class="d-block text-center text-center"
                                    >
                                        יונתן דורטהיימר
                                    </a>
                                    מתכנת, אדריכל וחוקר
                                </div>
                            </div>

                            <div class="col-6 col-lg-4">
                                <div class="m-3 text-center">
                                    <img
                                        class="img-fluid"
                                        src={ann}
                                        alt="אן לילמנסטונס"
                                    />
                                    <div class="d-block text-center">
                                        אן לילמנסטונס
                                    </div>
                                    מעצבת UX/UI
                                </div>
                            </div>
                            <div class="col-6 col-lg-4">
                                <div class="m-3 text-center">
                                    <img
                                        class="img-fluid"
                                        src={shira}
                                        alt="שירה אפרתי"
                                    />
                                    <div class="d-block text-center">
                                        שירה אפרתי
                                    </div>
                                    אדריכלית
                                </div>
                            </div>

                            <div class="col-6 col-lg-4">
                                <div class="m-3 text-center">
                                    <img
                                        class="img-fluid"
                                        src={gal}
                                        alt="גל גנדלר"
                                    />
                                    <div class="d-block text-center">
                                        גל גנדלר
                                    </div>
                                    מתכנתת
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default About;
