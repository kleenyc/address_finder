import { connect } from 'react-redux'
import { SEARCH, RESULTS } from '../actions'
import AddressFinder from './AddressFinder'
import axios from 'axios';
import React, {Component} from 'react'


export default connect(
	(state)    => ({search: state.search}),
	(dispatch) => ({results: () => dispatch({type: RESULTS})
	})
)(AddressFinder)


