<!-- <template>
    <div style="width: 500px;margin: 100px;">
        <p><input type="text"></p>

        <DatePicker type="month" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
        <DatePicker type="year" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>

        <DatePicker type="date" transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker>
        <DatePicker type="datetime" show-week-numbers confirm placeholder="Select date" style="width: 400px"></DatePicker>

        <DatePicker type="daterange" transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker>
        <DatePicker type="datetimerange" transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker>
        <Time-Picker :steps="[1, 1, 15]" :value="new Date()"></Time-Picker>
        <Divider>快捷方式</Divider>
        <Row>
            <Col span="12">
                <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
            <Col span="12">
                <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
-->

<template>
    <div style="width: 500px;margin: 100px;">
        <p style="margin: 10px 0">datetime</p>
        <DatePicker type="datetime" style="width:400px"></DatePicker>
        <br/>
        <p style="margin: 10px 0">datetime options</p>
        <DatePicker type="datetime" placeholder="Select date" style="width: 300px" :options="options1" :value="datetime"></DatePicker>
        <br/>
        <p style="margin: 10px 0">datetime options shortcutUnique</p>
        <DatePicker type="datetime" placeholder="Select date" style="width: 300px" :options="options1" :value="datetime" shortcutUnique></DatePicker>
        <br/>
        <p style="margin: 10px 0">daterange</p>
        <DatePicker type="daterange" style="width:400px" :value="daterange"></DatePicker>
        <br/>
        <p style="margin: 10px 0">daterange options</p>
        <DatePicker type="daterange" style="width:400px" :options="options2" :value="daterange"></DatePicker>
        <br/>
        <p style="margin: 10px 0">daterange options shortcutUnique</p>
        <DatePicker type="daterange" style="width:400px" :value="daterange" :options="options2" shortcutUnique></DatePicker>
        <br/>
        <p style="margin: 10px 0">datetimerange</p>
        <DatePicker type="datetimerange" style="width:400px"></DatePicker>
        <br/>
        <p style="margin: 10px 0">datetimerange options</p>
        <DatePicker type="datetimerange" placeholder="Select date" style="width: 300px" :options="options2" :value="datetimerange"></DatePicker>
        <br/>
        <p style="margin: 10px 0">datetimerange options shortcutUnique</p>
        <DatePicker type="datetimerange" placeholder="Select date" style="width: 400px" :options="options2" :value="datetimerange" shortcutUnique></DatePicker>
        <br/>
        <p style="margin: 10px 0">datetimerange options endDateSetMaxTime</p>
        <DatePicker type="datetimerange" placeholder="Select date" style="width: 300px" :options="options2" :value="datetimerange" endDateSetMaxTime></DatePicker>
        <br/>
    </div>
</template>
<script>
    let getDayParmas = function () {
        let today = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
        let oneDay = 24 * 60 * 60 * 1000;
        let thatDayTime = oneDay - 1; // 一天持续的时间
        return {today, oneDay, thatDayTime};
    };
    export default {
        data() {
            return {
                datetime:'',
                datetimerange: [],
                daterange: [],
                options1: {
                    shortcuts: [
                        {
                            text: '昨日',
                            name: 'yesterday',
                            grid: 1,
                            value () {
                                let sDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today - dayParmas.oneDay);
                                return sDate;
                            }
                        },
                        {
                            text: '今日',
                            name: 'today',
                            grid: 1,
                            value () {
                                let sDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today);
                                return sDate;
                            }
                        },
                        {
                            text: '7天前',
                            name: 'lastWeek',
                            grid: 2,
                            value () {
                                let sDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today - dayParmas.oneDay * 7);
                                return sDate;
                            }
                        },
                        {
                            text: '30天前',
                            name: 'lastMonth',
                            grid: 2,
                            value () {
                                let sDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today - dayParmas.oneDay * 30);
                                return sDate;
                            }
                        }
                    ],
                    shortcutsArr: ['yesterday','today','lastMonth']
                },
                options2:{
                    shortcuts: [
                        {
                            text: '昨日',
                            name: 'yesterday',
                            grid: 1,
                            value () {
                                let sDate, eDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today - dayParmas.oneDay);
                                eDate = new Date(sDate.valueOf() + dayParmas.thatDayTime);
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '今日',
                            name: 'today',
                            grid: 1,
                            value () {
                                let sDate, eDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today);
                                eDate = new Date();
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '上周',
                            name: 'lastWeek',
                            grid: 1,
                            value () {
                                let sDate, eDate, dayNumber;
                                let dayParmas = getDayParmas();

                                dayNumber = dayParmas.today.getDay() !== 0 ? dayParmas.today.getDay() : 7;
                                sDate = new Date(dayParmas.today - dayParmas.oneDay * (dayNumber + 6));
                                eDate = new Date(dayParmas.today - dayParmas.oneDay * dayNumber + dayParmas.thatDayTime);
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '本周',
                            name: 'thisWeek',
                            grid: 1,
                            value () {
                                let sDate, eDate, dayNumber;
                                let dayParmas = getDayParmas();

                                dayNumber = dayParmas.today.getDay() !== 0 ? dayParmas.today.getDay() : 7;
                                sDate = new Date(dayParmas.today - dayParmas.oneDay * (dayNumber - 1));
                                eDate = new Date();
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '上月',
                            name: 'lastMonth',
                            grid: 1,
                            value () {
                                let sDate, eDate;
                                let dayParmas = getDayParmas();

                                eDate = new Date(dayParmas.today - dayParmas.oneDay * dayParmas.today.getDate());
                                sDate = new Date(eDate - dayParmas.oneDay * (eDate.getDate() - 1));
                                eDate = new Date(dayParmas.today - dayParmas.oneDay * dayParmas.today.getDate() + dayParmas.thatDayTime);
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '本月',
                            name: 'thisMonth',
                            grid: 1,
                            value () {
                                let sDate, eDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today - dayParmas.oneDay * (dayParmas.today.getDate() - 1));
                                eDate = new Date();
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '去年',
                            name: 'lastYear',
                            grid: 1,
                            value () {
                                let sDate, eDate, sYear, eYear;
                                let dayParmas = getDayParmas();

                                sYear = new Date(dayParmas.today);
                                sYear.setFullYear(dayParmas.today.getFullYear() - 1);
                                sYear.setMonth(0);
                                sYear.setDate(1);
                                eYear = new Date(sYear);
                                eYear.setFullYear(eYear.getFullYear() + 1);
                                eYear.setTime(eYear.getTime() - 1);
                                sDate = sYear;
                                eDate = eYear;
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '本年',
                            name: 'thisYear',
                            grid: 1,
                            value () {
                                let sDate, eDate, sYear;
                                let dayParmas = getDayParmas();

                                sYear = new Date(dayParmas.today);
                                sYear.setFullYear(dayParmas.today.getFullYear());
                                sYear.setMonth(0);
                                sYear.setDate(1);
                                sDate = sYear;
                                eDate = new Date();
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '过去3天',
                            name: 'last3days',
                            grid: 2,
                            value () {
                                let sDate, eDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today - dayParmas.oneDay * 2);
                                eDate = new Date();
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '过去7天',
                            name: 'last7days',
                            grid: 2,
                            value () {
                                let sDate, eDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today - dayParmas.oneDay * 6);
                                eDate = new Date();
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '过去30天',
                            name: 'last30days',
                            grid: 2,
                            value () {
                                let sDate, eDate;
                                let dayParmas = getDayParmas();

                                sDate = new Date(dayParmas.today - dayParmas.oneDay * 29);
                                eDate = new Date();
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '上线至今',
                            name: 'goingOnline',
                            grid: 2,
                            value () {
                                let sDate, eDate;
                                let startservicetime = proStorage.fetch('serverOpenTime');

                                sDate = new Date(startservicetime.replace(/-/g, '/'));
                                eDate = new Date();
                                return [sDate, eDate];
                            }
                        },
                        {
                            text: '开服至今',
                            name: 'openserviceOnline',
                            grid: 2,
                            value () {
                                let sDate, eDate;
                                let serverid = proStorage.fetch('serverid');

                                sDate = serverid && serverid.create_time ? new Date(serverid.create_time.replace(/-/g, '/')) : new Date();
                                eDate = new Date();
                                return [sDate, eDate];
                            },
                            onClick: (picker) => {
                                let serverid = proStorage.fetch('serverid');
                                if (!serverid || !serverid.create_time) {this.$Message.warning('请先选择服务器');};
                            }
                        }
                    ],
                    shortcutsArr: ['yesterday','today','lastWeek','thisWeek','lastMonth', 'lastYear','last7days']
                },
            }
        }

    };
</script>

