var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdary'];

var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var x = new Date();

var library = (function () {
	return {
		Format: (function () {
			return {
				Ordinal: function (num) {
					var lastNum = num.toString().substring(num.toString().length - 1);
					if (lastNum == 1 || num !== 11) {
						return num + 'st';
					} else if (lastNum == 2 || num !== 12) {
						return num + 'nd';
					} else if (lastNum == 3 || num !== 13) {
						return num + 'rd';
					} else {
						return num + 'th';
					}
				}
			}
		})(),
		TimeStamp: (function () {
			return {
				UnixTimestamp: function () {
					//console.log(String(Math.floor(Date.now() / 1000)));
					return String(Math.floor(Date.now() / 1000));
				},
				UnixMillisecond: function () {
					//console.log(String(Date.now()));
					return String(Date.now());
				}
			}
		})(),
		Local: (function () {
			return {
				Time: (function () {
					return {
						WithSeconds: function () {
							var dateWithSeconds = new Date();
							//console.log(String(dateWithSeconds.toLocalTimeString()));
							return String(dateWithSeconds.toLocaleTimeString());
						},
						WithOutSeconds: function () {
							var dateWithoutSeconds = new Date();
							//console.log(String(dateWithoutSeconds.toLocalTimeString([], { hour: '2-digit', minute: '2 digit' })));
							return String(dateWithoutSeconds.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
						}
					}
				})(),
				MDY: (function () {
					var month1 = x.getUTCMonth() + 1;
					var day1 = x.getUTCDate();
					var year1 = x.getUTCFullYear();
					var mdy = month1 + '/' + day1 + '/' + year1;
					var month2 = months;
					var myd2 = month2[x.getMonth()];
					var myd3 = myd2 + ' ' + day1 + ', ' + year1;
					return {
						Numeral: function () {
							//console.log(String(mdy));
							return String(mdy);
						},
						Name: function () {
							//console.log(String(myd3));
							return String(myd3);
						}
					}
				})(),
			}
		})(),
		Second: (function () {
			var seconds = x.getSeconds();
			return {
				Second: function () {
					//console.log(String(seconds));
					return String(seconds);
				},
				DblDigit: function () {
					if (seconds <= 9) {
						//console.log(String('0' + seconds));
						return String('0' + seconds);
					} else {
						//console.log(String(seconds));
						return String(seconds);
					}
				}
			}
		})(),
		Minute: (function () {
			var min = x.getMinutes();
			return {
				Minute: function () {
					//console.log(String(min));
					return String(min);
				},
				DblDigit: function () {
					if (min <= 9) {
						//console.log(String('0' + min));
						return String('0' + min);
					} else {
						//console.log(String(min));
						return String(min);
					}
				}
			}
		})(),
		Hour: (function () {
			return {
				TwentyFourHour: function () {
					var time = x.getHours();
					//console.log(String(time));
					return String(time);
				},
				TwelveHour: function () {
					var time = x.getHours();
					if (time >= 12) {
						var pm = time - 12;
						//console.log(String(pm));
						return String(pm);
					} else {
						//console.log(String(time));
						return String(time);
					}
				},
				AMPM: (function () {
					return {
						UpperCase: function () {
							var time = x.getHours();
							if (time <= 11) {
								//console.log(String('AM'));
								return String('AM');
							} else {
								//console.log(String('PM'));
								return String('PM');
							}
						},
						LowerCase: function () {
							var time = x.getHours();
							if (time <= 11) {
								//console.log(String('am'));
								return String('am');
							} else {
								//console.log(String('pm'));
								return String('pm');
							}
						}
					}
				})()
			}
		})(),
		Week: (function () {
			return {
				DayOfWeek: function () {
					var day = days;
					//console.log(day[x.getDay()]);
					return day[x.getDay()];
				},
				AbrDayOfWeek: function () {
					var day = days;
					//console.log(day[x.getDay()].substring(0, 3));
					return day[x.getDay()].substring(0, 3);
				},
				FirstTwoOfWeek: function () {
					var day = days;
					//console.log(day[x.getDay()].substring(0, 2));
					return day[x.getDay()].substring(0, 2);
				},
				WeekOfYear: function () {
					var x = new Date();
					var weeksPerMonth = [0, 5, 9, 14, 18, 22, 27, 31, 35, 40, 44, 48, 54];
					var monthsLeft = x.getMonth();
					var weeks = weeksPerMonth[x.getMonth()];
					var thisWeek = Math.floor(x.getDate() / 7);
					var weekOfTheYear = thisWeek + weeksPerMonth[monthsLeft];
					//console.log(String(weekOfTheYear));
					return String(weekOfTheYear);
				}
			}
		})(),
		Month: (function () {
			return {
				DateOfMonth: (function () {
					var x = new Date();
					return {
						Numeral: function () {
							//console.log();
							return String(x.getDate());
						},
						Ordinal: function () {
							//console.log();
							return library.Format.Ordinal(x.getDate());
						},
						DateDblDigit: function () {
							var y = x.getDate();
							if (y <= 9) {
								var doubleDigit = String(y);
								//console.log();
								doubleDigit = '0' + doubleDigit;
								return doubleDigit;
							} else {
								//console.log();
								return String(y);
							}
						}
					}
				})(),
				MonthNumber: function () {
					console.log(String(x.getMonth() + 1));
					return String(x.getMonth() + 1);
				},
				MonthNumberDblDigit: function () {
					var y = x.getMonth() + 1;
					if (y <= 9) {
						var doubleDigit2 = String(y);
						doubleDigit2 = ('0' + doubleDigit2);
						//console.log(String(doubleDigit2));
						return String(doubleDigit2);
					} else {
						//console.log(String(doubleDigit2));
						return String(doubleDigit2);
					}
				},
				AbrOfCurrentMonth: function () {
					var monthsAbbr = months;
					//console.log();
					return monthsAbbr[x.getMonth()].substring(0, 3);
				},
				CurrentMonth: function () {
					//console.log();
					return months[x.getMonth()];
				}
			}
		})(),
		Year: (function () {
			var now = new Date();
			return {
				DayOfYear: (function () {
					var today = new Date(now.getFullYear(), 0, 0);
					var yesterday = now - today;
					var future = 1000 * 60 * 60 * 24;
					var past = Math.floor(yesterday / future);
					var present = yesterday / future;
					return {
						Numeral: function () {
							//console.log();
							return String(past);
						},
						Ordinal: function () {
							var day1 = present.toString().split('.')[0];
							var day2 = Number(day1.charAt(day1.length - 1));
							if (day2 === 1 && past != 11) {
								return String(past + 'st')
							} else if (day2 === 2 && past != 12) {
								return String(past + 'nd')
							} else if (day2 === 3 && past != 13) {
								return String(past + 'rd')
							} else {
								return String(past + "th");
							}
						}
					}
				})(),
				YearFull: function () {
					var year = now.getFullYear();
					return String(year);
				},
				YearAbr: function () {
					var y = now.getFullYear();
					var final = y.toString().substring(2);
					return final;
				}
			}
		})(),
		Defaults: function () {
			var year = library.Year.YearFull();
			var month = library.Month.MonthNumberDblDigit();
			var date = library.Month.DateOfMonth.DateDblDigit();
			var hour = library.Hour.TwentyFourHour();
			if (hour < 10) {
				hour = '0' + hour;
			} else {
				hour
			}
			var minutes = library.Minute.DblDigit();
			var seconds = library.Second.DblDigit();
			return year + "-" + month + "-" + date +
				"T" + hour + ":" + minutes + ":" + seconds;
		}
	}
})();