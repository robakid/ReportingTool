var app = new Vue({
  el: '#app',
  data: {
    periodTotalHours: 0,
    weeks: [{
      totalHours: 0,
      days: [{
        date: "2019-04-01",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "2019-04-02",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "2019-04-03",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "2019-04-04",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "2019-04-05",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "",
        start: "",
        end: "",
        dailyTotal: 0
      }, {
        date: "",
        start: "",
        end: "",
        dailyTotal: 0
      }]
    }, {
      totalHours: 0,
      days: [{
        date: "2019-04-08",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "2019-04-09",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "2019-04-10",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "2019-04-11",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "2019-04-12",
        start: "09:00",
        end: "17:00",
        dailyTotal: 0
      }, {
        date: "",
        start: "",
        end: "",
        dailyTotal: 0
      }, {
        date: "",
        start: "",
        end: "",
        dailyTotal: 0
      }]
    }]
  },

  methods: {
    
    dailyHours: function(day) {
      var start = moment(day.date + " " + day.start);
      var end = moment(day.date + " " + day.end);     

      var dailyTotal = (end.diff(start, 'minutes') / 60);
      
      day.dailyTotal = dailyTotal.toFixed(2);
      
      return dailyTotal.toFixed(2);
    },
    
    weeklyHours: function(week) {
      var weekHours = 0;
      var storeWeeklyInfo = [{startDate: "", endDate:"", totalHours: "",}, {startDate: "", endDate:"", totalHours: "",}] ;

    for (var i = 0; i < week.days.length; i++) {
    	if (week.days[i].dailyTotal != "NaN") {
        	weekHours += parseFloat(week.days[i].dailyTotal); 
        }
      }
     	week.totalHours = weekHours;
     	week.startDate = week.days[0].date;
     	week.endDate = week.days[(week.days.length-1)].date;
      
     	return weekHours.toFixed(2);
    },


    
    biweeklyHours: function(week) {
    var biweekly = 0;
    var storeWeeklyInfo = [] ;

    for (var i = 0; i < this.weeks.length; i++) {
		biweekly += parseFloat(this.weeks[i].totalHours);
		storeWeeklyInfo.push({startDate: this.weeks[i].startDate,  endDate: this.weeks[i].endDate, totalHours: this.weeks[i].totalHours
      });
    }
    
    localStorage.setItem('reportToolWeekly', JSON.stringify(storeWeeklyInfo));
    var storedData = JSON.parse(localStorage.getItem('reportToolWeekly'));


    return biweekly;
    }
  }
})

$('#submit').click(function() {
  swal({
    title: "Confirm the Submission",
    text: "Once Submitted your report will be reviewed by your Manager",
    type: "info",
    showCancelButton: true,
    confirmButtonColor: "#8B0000",
    confirmButtonText: "Confirm",
    cancelButtonText: "Cancel",
    closeOnConfirm: false,
    closeOnCancel: false
  }, function(isConfirm) {
    if (isConfirm) {
      swal("Submitted!", "Your report was submitted for the review. You can go to Submitted Reports to see the status", "success");
    } else {
      swal("Submission Cancelled", "Submission cancelled", "error");
    }
  });
});

$('#save').click(function() {
  swal("Timesheet Saved!","", "success");
});

