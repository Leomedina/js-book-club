/**
 * scheduleMeeting(..) should take a start time(in 24 - hour format as a string "hh:mm") and a meeting
 *     duration(number of minutes).It should return true if the meeting falls entirely within the work
 *     day(according to the times specified in dayStart and dayEnd); return false if the meeting violates 
 *     the work day bounds.
**/

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  const meetingEndTime = totalTime(startTime, durationMinutes);
  
  if (normTime(dayStart) > normTime(startTime)) return false;
  if (normTime(meetingEndTime) > normTime(dayEnd)) return false;

  return true;
};

function totalTime(start, duration) {
  const timeArray = start.split(":")
  const hours = (Math.floor(duration / 60) + +timeArray[0]);
  const mins = (duration % 60) + +timeArray[1];
  return `${hours}:${mins}`
};

function normTime(time) {
  if (time[0] == 0) return time.replace(":", "");
  if (time.length === 5) return time.replace(":", "");
  return 0 + time.replace(":", "");
};

console.log(scheduleMeeting("7:00", 15));     // false
console.log(scheduleMeeting("07:15", 30));    // false
console.log(scheduleMeeting("7:30", 30));     // true
console.log(scheduleMeeting("11:30", 60));    // true
console.log(scheduleMeeting("17:00", 45));    // true
console.log(scheduleMeeting("17:30", 30));    // false
console.log(scheduleMeeting("18:00", 15));    // false