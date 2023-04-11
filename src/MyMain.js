import main1 from "./img/main1.png";
import main2 from "./img/main2.png";
import main3 from "./img/main3.png";
import main4 from "./img/main4.png";

const MyMain = () => {
    return (
        <main>
            {/* <!--메인 --> */}
            <section id="home-main-section-top">
                <div id="home-main-top">
                    <div class="home-main-desc">
                        <h1 class="home-main-title-top">
                            당신 근처의
                            <br />
                            당근마켓
                        </h1>
                        <p class="home-main-text">
                            중고 거래부터 동네 정보까지, 이웃과 함께해요.
                            <br />
                            가깝고 따뜻한 당신의 근처를 만들어요.
                        </p>
                        <div class="home-main-image">
                            <img
                                class="home-main-image"
                                src={main1}
                                alt="main image1"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-main-section">
                <div id="home-main-content">
                    <div class="home-main-image-2">
                        <img
                            class="home-main-image-2"
                            src={main2}
                            alt="main image2"
                        />
                    </div>
                    <div class="home-main-desc">
                        <h1 class="home-main-title">
                            우리 동네
                            <br />
                            중고 직거래 마켓
                        </h1>
                        <p class="home-main-text">
                            동네 주민들과 가깝고 따뜻한 거래를 지금
                            경험해보세요.
                        </p>
                        <div class="home-buttons">
                            <a
                                class="home-button"
                                href="https://daangn.com/hot_articles"
                            >
                                인기매물 보기
                            </a>
                            <a
                                class="home-button ml-3"
                                href="https://www.daangn.com/trust"
                            >
                                믿을 수 있는 중고거래
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-main-section" class="background-pale-green">
                <div id="home-main-content">
                    <div class="home-main-desc">
                        <h1 class="home-main-title">
                            이웃과 함께 하는
                            <br />
                            동네생활
                        </h1>
                        <p class="home-main-text">
                            우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
                        </p>
                        <ul class="home-story-list">
                            <li class="home-story-list-item">
                                <div class="icon-story icon-story-01"></div>
                                <div class="icon-text">우리동네질문</div>
                                <div class="icon-descript">
                                    궁금한 게 있을 땐 이웃에게 물어보세요.
                                </div>
                            </li>
                            <li class="home-story-list-item">
                                <div class="icon-story icon-story-02"></div>
                                <div class="icon-text">동네분실센터</div>
                                <div class="icon-descript">
                                    무언가를 잃어버렸을 때, 함께 찾을 수 있어요.
                                </div>
                            </li>
                            <li class="home-story-list-item">
                                <div class="icon-story icon-story-03"></div>
                                <div class="icon-text">동네모임</div>
                                <div class="icon-descript">
                                    관심사가 비슷한 이웃과 온오프라인으로
                                    만나요.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="home-main-image-2">
                        <img
                            class="home-main-image-2"
                            src={main3}
                            alt="main image3"
                        />
                    </div>
                </div>
            </section>
            <section id="home-main-section">
                <div id="home-main-content">
                    <div class="home-main-image-2">
                        <img
                            class="home-main-image-2"
                            src={main4}
                            alt="main image4"
                        />
                    </div>
                    <div class="home-main-desc">
                        <h1 class="home-main-title">
                            내 근처에서 찾는
                            <br />
                            동네가게
                        </h1>
                        <p class="home-main-text">
                            우리 동네 가게를 찾고 있나요?
                            <br />
                            동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
                        </p>
                        <div class="home-buttons">
                            <a
                                class="home-button"
                                href="https://daangn.com/kr/nearby-stores/"
                            >
                                당근마켓 동네가게 찾기
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="toggle-btn">
                            <span
                                style="font-size: 30px; cursor: pointer"
                                onclick="test()"
                            >
                                &#9776;
                            </span>
                        </div> */}
            <section class="home-main-section background-gray" id="my_div">
                <div class="home-hot-content">
                    <h1 class="home-main-title text-center">
                        중고거래 인기매물
                    </h1>
                    <div class="cards-wrap">
                        <article class="card-top">
                            <a
                                class="card-link"
                                data-event-label="558544463"
                                href="/articles/558544463"
                            >
                                <div class="card-photo">
                                    <img
                                        alt="위닉스제습기"
                                        src="https://dnvefa72aowie.cloudfront.net/origin/article/202303/2e3462bb439e276d12b809c12f515a5ee4ed128aa4799ca88879a79de0df7c79.webp?q=82&amp;s=300x300&amp;t=crop"
                                    />
                                </div>
                                <div class="card-desc">
                                    <h2 class="card-title">위닉스제습기</h2>
                                    <div class="card-price">50,000원</div>
                                    <div class="card-region-name">
                                        서울 성동구 행당동
                                    </div>
                                    <div class="card-counts">
                                        <span> 관심 71 </span>∙
                                        <span> 채팅 101 </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="card-top">
                            <a
                                class="card-link"
                                data-event-label="561378182"
                                href="/articles/561378182"
                            >
                                <div class="card-photo">
                                    <img
                                        alt="창고 팝니다"
                                        src="https://dnvefa72aowie.cloudfront.net/origin/article/202304/bbad2de9ddac7b804680b9a8c8eeeeca7027d46da18a1123ab1b2ddb5ea9527d.webp?q=82&amp;s=300x300&amp;t=crop"
                                    />
                                </div>
                                <div class="card-desc">
                                    <h2 class="card-title">창고 팝니다</h2>
                                    <div class="card-price">150,000원</div>
                                    <div class="card-region-name">
                                        제주 제주시 일도2동
                                    </div>
                                    <div class="card-counts">
                                        <span> 관심 30 </span>∙
                                        <span> 채팅 5 </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="card-top">
                            <a
                                class="card-link"
                                data-event-label="562128658"
                                href="/articles/562128658"
                            >
                                <div class="card-photo">
                                    <img
                                        alt="애플워치 1만원에 ㅍㅍ"
                                        src="https://dnvefa72aowie.cloudfront.net/origin/article/202304/bdc728b64901ba52bc997653c645896fc09f30e477d936f851d41328cd7dd396.jpg?q=82&amp;s=300x300&amp;t=crop"
                                    />
                                </div>
                                <div class="card-desc">
                                    <h2 class="card-title">
                                        애플워치 1만원에 ㅍㅍ
                                    </h2>
                                    <div class="card-price">10,000원</div>
                                    <div class="card-region-name">
                                        서울 서초구 반포동
                                    </div>
                                    <div class="card-counts">
                                        <span> 관심 13 </span>∙
                                        <span> 채팅 52 </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="card-top">
                            <a
                                class="card-link"
                                data-event-label="558654992"
                                href="/articles/558654992"
                            >
                                <div class="card-photo">
                                    <img
                                        alt="코드제로"
                                        src="https://dnvefa72aowie.cloudfront.net/origin/article/202303/214fea88e02b8e9480981e603b32bf2c809693558dacf58acc5e2be9936c284a.webp?q=82&amp;s=300x300&amp;t=crop"
                                    />
                                </div>
                                <div class="card-desc">
                                    <h2 class="card-title">코드제로</h2>
                                    <div class="card-price">150,000원</div>
                                    <div class="card-region-name">
                                        충남 서산시 예천동
                                    </div>
                                    <div class="card-counts">
                                        <span> 관심 17 </span>∙
                                        <span> 채팅 9 </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="card-top">
                            <a
                                class="card-link"
                                data-event-label="562043472"
                                href="/articles/562043472"
                            >
                                <div class="card-photo">
                                    <img
                                        alt="(내용수정) 엘지에어컨"
                                        src="https://dnvefa72aowie.cloudfront.net/origin/article/202304/109200f2f2c00e329bf281e5547d8f535e203e02ea60a942c50d11b572382c82.webp?q=82&amp;s=300x300&amp;t=crop"
                                    />
                                </div>
                                <div class="card-desc">
                                    <h2 class="card-title">
                                        (내용수정) 엘지에어컨
                                    </h2>
                                    <div class="card-price">50,000원</div>
                                    <div class="card-region-name">
                                        강원도 춘천시 석사동
                                    </div>
                                    <div class="card-counts">
                                        <span> 관심 5 </span>∙
                                        <span> 채팅 40 </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="card-top">
                            <a
                                class="card-link"
                                data-event-label="558751259"
                                href="/articles/558751259"
                            >
                                <div class="card-photo">
                                    <img
                                        alt="가게정리"
                                        src="https://dnvefa72aowie.cloudfront.net/origin/article/202303/3308d778c50f0a95a56b9d6a24e19927bc8341f423d2307d72b7df1fd7e33e6b.webp?q=82&amp;s=300x300&amp;t=crop"
                                    />
                                </div>
                                <div class="card-desc">
                                    <h2 class="card-title">가게정리</h2>
                                    <div class="card-price">1,000원</div>
                                    <div class="card-region-name">
                                        전북 군산시 영동
                                    </div>
                                    <div class="card-counts">
                                        <span> 관심 20 </span>∙
                                        <span> 채팅 64 </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="card-top">
                            <a
                                class="card-link"
                                data-event-label="561925745"
                                href="/articles/561925745"
                            >
                                <div class="card-photo">
                                    <img
                                        alt="트렉 듀얼스포츠 2  MTB자전거"
                                        src="https://dnvefa72aowie.cloudfront.net/origin/article/202304/2b91bbf7e4549de4589f6520c4464ea706237417b65dd60dece47d007b2a65c7.webp?q=82&amp;s=300x300&amp;t=crop"
                                    />
                                </div>
                                <div class="card-desc">
                                    <h2 class="card-title">
                                        트렉 듀얼스포츠 2 MTB자전거
                                    </h2>
                                    <div class="card-price">100,000원</div>
                                    <div class="card-region-name">
                                        서울 관악구 신림동
                                    </div>
                                    <div class="card-counts">
                                        <span> 관심 20 </span>∙
                                        <span> 채팅 11 </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="card-top">
                            <a
                                class="card-link"
                                data-event-label="561428856"
                                href="/articles/561428856"
                            >
                                <div class="card-photo">
                                    <img
                                        alt="삼성무풍에어컨 2in1 팝니다"
                                        src="https://dnvefa72aowie.cloudfront.net/origin/article/202304/edf7a59b3b7e8a9c18e45339b33af17f14f2a82fa02a7ecb7d4359b3a340a0fb.webp?q=82&amp;s=300x300&amp;t=crop"
                                    />
                                </div>
                                <div class="card-desc">
                                    <h2 class="card-title">
                                        삼성무풍에어컨 2in1 팝니다
                                    </h2>
                                    <div class="card-price">110만원</div>
                                    <div class="card-region-name">
                                        울산 남구 달동
                                    </div>
                                    <div class="card-counts">
                                        <span> 관심 16 </span>∙
                                        <span> 채팅 47 </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </div>
                    <div class="text-center">
                        <a href=" ">인기매물 더 보기</a>
                    </div>
                </div>
            </section>

            {/* <section>
                <h3></h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section> */}
        </main>
    );
};

export default MyMain;
