import { ref } from "vue";
import axios from "axios";
import Activity from "../interfaces";

export function useActivityAPI() {
  const activity = ref<Activity>();

  async function fetchPaidActivity() {
    try {
      const res = await axios.get(
        "https://www.boredapi.com/api/activity?minprice=0.1&maxprice=1",
      );
      activity.value = res.data;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchFreeActivity() {
    try {
      const res = await axios.get(
        "https://www.boredapi.com/api/activity?price=0.0",
      );
      activity.value = res.data;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return { activity, fetchFreeActivity, fetchPaidActivity };
}
