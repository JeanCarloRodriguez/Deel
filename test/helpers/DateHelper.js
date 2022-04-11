const dayjs = require('dayjs')

class DateHelper {
    
    substractDaysToCurrent() {
        let now = dayjs()
        return now.subtract(1, 'day').format('MMMM DD, YYYY')
    }
}

module.exports = new DateHelper();