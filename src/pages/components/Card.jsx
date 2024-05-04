import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import src\pages\components\toursImg\tour-1-1.jpg
import tour2 from "./toursImg/tour-1-cover.jpg"

function Card({tour}) {
    // let img = `./toursImg/${tour.imageCover}`
    return (
        <>
            <div class="card">
                <div class="card__header">
                    <div class="card__picture">
                        <div class="card__picture-overlay">&nbsp;</div>
                        <Image width={100} height={100} class="card__picture-img" src={tour2} alt={tour.name}/>
                    </div>
                    <h3 class="heading-tertirary">
                        <span>{tour.name}</span>
                    </h3>
                </div>
                <div class="card__details">
                    <h4 class="card__sub-heading">{tour.difficulty} {tour.duration}-day tour</h4>
                    <p class="card__text">{tour.summary}</p>
                    <div class="card__data">
                        <svg class="card__icon">
                            {/* <use xlink:href="/img/icons.svg#icon-map-pin"></use> */}
                        </svg>
                        <span>{tour.startLocation.description}</span>
                    </div>
                    <div class="card__data">
                        <svg class="card__icon">
                            {/* <use xlink:href="/img/icons.svg#icon-calendar"></use> */}
                        </svg>
                        <span>{tour.startDates[0].toLocaleString('en-us', {month: 'long', year: 'numeric'})}</span>
                    </div>
                    <div class="card__data">
                        <svg class="card__icon">
                            {/* <use xlink:href="/img/icons.svg#icon-flag"></use> */}
                        </svg>
                        <span>{tour.locations.length} stops</span>
                    </div>
                    <div class="card__data">
                        <svg class="card__icon">
                            {/* <use xlink:href="/img/icons.svg#icon-user"></use> */}
                        </svg>
                        <span>{tour.maxGroupSize} people</span>
                    </div>
                </div>
                <div class="card__footer">
                    <p>
                        <span class="card__footer-value">${tour.price}</span>
                        <span class="card__footer-text"> per person</span>
                    </p>
                    <p class="card__ratings">
                        <span class="card__footer-value">{tour.ratingsAverage} </span>
                        <span class="card__footer-text">rating ({tour.ratingsQuantity})</span>
                    </p>
                    <Link class="btn btn--green btn--small" href={`/tour/${encodeURIComponent(tour.name)}`} passHref> Details</Link>
                </div>
            </div>
        </>
    )
}

export default Card
