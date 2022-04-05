import {applyMiddleware} from 'redux'
import logger from './loger'
export default applyMiddleware(
logger
)
