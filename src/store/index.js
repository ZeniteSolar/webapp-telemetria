import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

exports default new Vuex.Store({
    state: {
        boatData: [
            { "_id": "5dffd195dbe977463d6f62a9", "ts": 1570322086, "ts_u": 983453, "ts_complete": 1570322086.983453, "data_time": "2019-10-05 21:34:46.983", "info": "e60200", "date_on_mongo": "2019-12-22T20:27:01.086Z", "__v": 0 },
            { "_id": "5dffd196dbe977463d6f62aa", "ts": 1570322087, "ts_u": 86854, "ts_complete": 1570322087.86854, "data_time": "2019-10-05 21:34:47.869", "info": "e60000", "date_on_mongo": "2019-12-22T20:27:02.082Z", "__v": 0 },
            { "_id": "5dffd197dbe977463d6f62ab", "ts": 1570322087, "ts_u": 351445, "ts_complete": 1570322087.351445, "data_time": "2019-10-05 21:34:47.351", "info": "e60000", "date_on_mongo": "2019-12-22T20:27:03.085Z", "__v": 0 },
            { "_id": "5dffd198dbe977463d6f62ac", "ts": 1570322087, "ts_u": 507139, "ts_complete": 1570322087.507139, "data_time": "2019-10-05 21:34:47.507", "info": "e60200", "date_on_mongo": "2019-12-22T20:27:04.089Z", "__v": 0 }
        ]
    }
});