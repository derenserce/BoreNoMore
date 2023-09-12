import axios from "axios";

export default {
  async fetchPaidActivity(activity: any) {
    try {
      const res = await axios.get("https://www.boredapi.com/api/activity?minprice=0.1&maxprice=1");
      activity.value = res.data;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },

  async fetchFreeActivity(activity: any) {
    try {
      const res = await axios.get("https://www.boredapi.com/api/activity?price=0.0");
      activity.value = res.data;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
};
