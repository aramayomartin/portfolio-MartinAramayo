import React, { useEffect, useState } from "react";
import { Button, Card, CardText, CardTitle } from "reactstrap";
import style from "../style.module.css";
import { AiOutlineReload } from "react-icons/ai";
import axios from "axios";

export default function MainCard() {
  const [quote, setQuote] = useState(``);
  useEffect(() => {
    reloadQuote();
  }, []);
  async function reloadQuote(e) {
    e && e.preventDefault();
    let { data } = await axios(
      "https://raw.githubusercontent.com/bitgary/hola-mundo/master/citas.json"
    );
    let random = Math.floor(Math.random() * data.length);
    let newQuote = `"${data[random].cita}" - ${
      data[random].autor ? data[random].autor : "Anonymous"
    }.`;
    setQuote(newQuote);
  }
  return (
    <div className={`px-5 pt-3`}>
      <Card body color="secondary" outline className={style.mainCard}>
        <div>
          <div className={style.cardElementsHorizontal}>
            <div>
              <CardTitle tag="h5">Martín Aramayo</CardTitle>
              <CardText>Full Stack Developer</CardText>
            </div>
            <Button
              className={style.buttonQuote}
              color="info"
              onClick={reloadQuote}
              id="button-quote"
            >
              <AiOutlineReload />
            </Button>
          </div>
          <p className={style.mainCardQuote}>{quote}</p>
        </div>
      </Card>
    </div>
  );
}
