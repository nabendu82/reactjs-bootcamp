import React from 'react'
import { buyEgg } from '../redux'
import { connect } from 'react-redux'

const EggContainer = (props) => {
    return (
        <div>
            <h2>Number of Eggs - {props.numOfEggs}</h2>
            <button onClick={props.eggBuy}>Buy Egg</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfEggs: state.egg.numOfEggs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        eggBuy: () => dispatch(buyEgg())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EggContainer)