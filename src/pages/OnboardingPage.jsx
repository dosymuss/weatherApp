import { useNavigate } from "react-router-dom";

import Loader from "../ui/loader/Loader";

import styles from "../styles/OnboardingPage.module.css";
import { useEffect } from "react";

const OnboardingPage = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const x = setTimeout(()=>{
      navigate("/main")
    },3000)

    return function clean(){
      clearTimeout(x)
    }
  },[])

  return (
    <div className={styles.wrap}>
      <Loader />
    </div>
  );
};

export default OnboardingPage;
