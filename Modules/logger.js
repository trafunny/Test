
import {
    LOG_TYPE , WARN_TYPE , ERROR_TYPE
} from './constants.js'

function logger(string , type = LOG_TYPE){
    console[type](string)
}

export default logger