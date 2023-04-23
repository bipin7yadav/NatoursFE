import React from 'react'
import Image from 'next/image'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/router'

export function getServerSideProps({ params: { id } }) {
    console.log("id",id);
    
    return {
      props: {
        propertyDetails: id,
      },
    };
  }

function Tour({id}) {
    const router = useRouter();
    console.log("id",id)
    console.log(router);
    const {  state: { tours } } = useAuthContext()
    const data = tours.filter((a)=>a.name== router.query.id)
    console.log("tourPage :",data);
    return (
        <>
            <section class="section-header">
                <div class="header__hero">
                    <div class="header__hero-overlay">&nbsp;</div>
                    <Image class="header__hero-img" src="/img/tours/tour-3-cover.jpg" height={100} width={100} alt="The Snow Adventurer" />
                </div>
                <div class="heading-box">
                    <h1 class="heading-primary">
                        <span>The Snow Adventurer tour</span>
                    </h1>
                    <div class="heading-box__group"><div class="heading-box__detail">
                        {/* <svg class="heading-box__icon">
                            <use xlink:href="/img/icons.svg#icon-clock"></use>
                        </svg> */}
                        <span class="heading-box__text">4 days</span>
                    </div>
                        <div class="heading-box__detail">
                            {/* <svg class="heading-box__icon">
                            <use xlink:href="/img/icons.svg#icon-map-pin"></use></svg> */}
                            <span class="heading-box__text">Aspen, USA</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-description">
                <div class="overview-box">
                    <div>
                        <div class="overview-box__group">
                            <h2 class="heading-secondary ma-bt-lg">Quick facts</h2>
                            <div class="overview-box__detail">
                                {/* <svg class="overview-box__icon">
                                    <use xlink:href="/img/icons.svg#icon-calendar"></use>
                                </svg> */}
                                <span class="overview-box__label">Next date</span>
                                <span class="overview-box__text">January 2022</span>
                            </div>
                            <div class="overview-box__detail">
                                {/* <svg class="overview-box__icon">
                                    <use xlink:href="/img/icons.svg#icon-trending-up"></use>
                                </svg> */}
                                <span class="overview-box__label">Difficulty</span>
                                <span class="overview-box__text">difficult</span>
                            </div>
                            <div class="overview-box__detail">
                                {/* <svg class="overview-box__icon">
                                    <use xlink:href="/img/icons.svg#icon-user"></use>
                                </svg> */}
                                <span class="overview-box__label">Participants</span>
                                <span class="overview-box__text">10 people</span>
                            </div>
                            <div class="overview-box__detail">
                                {/* <svg class="overview-box__icon">
                                    <use xlink:href="/img/icons.svg#icon-star"></use>
                                </svg> */}
                                <span class="overview-box__label">Rating</span>
                                <span class="overview-box__text">4.5 / 5</span>
                            </div>
                        </div>
                        <div class="overview-box__group">
                            <h2 class="heading-secondary ma-bt-lg">Your tour guides</h2>
                            <div class="overview-box__detail">
                                <Image class="overview-box__img" height={100} width={100} src="/img/users/user-10.jpg" alt="Steve T. Scaife" />
                                <span class="overview-box__label">Lead guide</span>
                                <span class="overview-box__text">Steve T. Scaife</span>
                            </div>
                            <div class="overview-box__detail">
                                <Image class="overview-box__img" height={100} width={100} src="/img/users/user-13.jpg" alt="Ben Hadley" />
                                <span class="overview-box__label">Tour guide</span>
                                <span class="overview-box__text">Ben Hadley</span></div><div class="overview-box__detail">
                                <Image class="overview-box__img" height={100} width={100} src="/img/users/user-6.jpg" alt="Jennifer Hardy" />
                                <span class="overview-box__label">Tour guide</span>
                                <span class="overview-box__text">Jennifer Hardy</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="description-box">
                    <h2 class="heading-secondary ma-bt-lg">About The Snow Adventurer tour</h2>
                    <p class="description__text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!</p><p class="description__text">Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                </div>
            </section>
            <section class="section-pictures">
                <div class="picture-box">
                    <Image class="picture-box__img picture-box__img--1" height={100} width={100} src="/img/tours/tour-3-1.jpg" alt="The Park Camper Tour 1" />
                </div>
                <div class="picture-box">
                    <Image class="picture-box__img picture-box__img--2" height={100} width={100} src="/img/tours/tour-3-2.jpg" alt="The Park Camper Tour 2" />
                </div>
                <div class="picture-box">
                    <Image class="picture-box__img picture-box__img--3" height={100} width={100} src="/img/tours/tour-3-3.jpg" alt="The Park Camper Tour 3" />
                </div>
            </section>
            <section class="section-reviews">
                <div class="reviews">
                    <div class="reviews__card">
                        <div class="reviews__avatar">
                            <Image class="reviews__avatar-img" height={100} width={100} src="/img/users/undefined" alt="Lourdes Browning" />
                            <h6 class="reviews__user" >Lourdes Browning</h6>
                            <div />
                        </div>
                        <p class="reviews__text">Tempus curabitur faucibus auctor bibendum duis gravida tincidunt litora himenaeos facilisis vivamus vehicula potenti semper fusce suspendisse sagittis!</p>
                        <div class="reviews__rating">
                            {/* <svg class="reviews__star reviews__star--active">
                            <use xlink:href="/img/icons.svg#icon-star"></use>
                        </svg>
                        <svg class="reviews__star reviews__star--active">
                            <use xlink:href="/img/icons.svg#icon-star"></use>
                        </svg>
                        <svg class="reviews__star reviews__star--active">
                            <use xlink:href="/img/icons.svg#icon-star"></use>
                        </svg>
                        <svg class="reviews__star reviews__star--active">
                            <use xlink:href="/img/icons.svg#icon-star"></use>
                        </svg>
                        <svg class="reviews__star reviews__star--inactive">
                            <use xlink:href="/img/icons.svg#icon-star"></use>
                        </svg> */}
                        </div>
                    </div>
                </div>
            </section >
            <section className="section-cta">
                <div className="cta">
                    <div className="cta__img cta__img--logo">
                        <Image src="/img/logo-white.png" alt="Natours logo" width={200} height={200} />
                    </div>
                    <Image className="cta__img cta__img--1" src="/img/tours/tour-3-2.jpg" alt="Tour picture" width={300} height={200} />
                    <Image className="cta__img cta__img--2" src="/img/tours/tour-3-3.jpg" alt="Tour picture" width={300} height={200} />
                    <div className="cta__content">
                        <h2 className="heading-secondary">What are you waiting for?</h2>
                        <p className="cta__text">4 days. 1 adventure. Infinite memories. Make it yours today!</p>
                        <a className="btn btn--green span-all-rows" href="/login">Log in to book tour</a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer__logo">
                    <Image src="/img/logo-green.png" alt="Natour logo" width={100} height={100} />
                </div>
                <ul className="footer__nav">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Download apps</a></li>
                    <li><a href="#">Become a guide</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <p className="footer__copyright">
                    © by Bipin Yadav. Feel free to use this project for your own purposes, EXCEPT producing your own course or tutorials!
                </p>
            </footer>

        </>
    )
}

export default Tour 

  
