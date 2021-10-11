import React from 'react'
import classes from "./MealsSummary.module.css"

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Hot hot Foody food at your door step.</h2>
            <p>
                Sample sentence one.
            </p>
            <p>
                Sample sentence two.
            </p>
        </section>
    )
}

export default MealsSummary
