let firsText = document.querySelectorAll(".mainH1").textContent;
const phoneModel = "xiaomi";
const phone = {
  xiaomi: "mi note 10 lite",
  socialNetwork: 4,
  education: 3,
  games: ["pubg", " newState", "race"],
  os: "android",
  features: {
    cpu: "sd730g",
    gpu: "aderno 618",
  },
};
console.log(phone[phoneModel]);
// دقت در شرط گذاشتن=تکلیف بانی برای فیلتر است
// let pairsByIndex = pairsByIndexRaw.filter(el=>(Array.isArray(el) && el.length === 2 && Number.isInteger(el[0]) && Number.isInteger(el[1])))

// سورت برای باگ جاواسکریپت که 1000 رو سورت نمیکنخ
// let sortedNumbers = numbers.sort((el1, el2) => el1 - el2);

// اسپلیت و جوین
// array.reduce((sorted, el) => {
//   let index = 0;
//   while (index < sorted.length && el < sorted[index]) index++;
//   sorted.splice(index, 0, el);
//   return sorted;
// }, []);
