import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from "react-i18next";

function Footer({ setPageIndex }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <DropdownButton
        className="aboutg20-footer font_para_en"
        key="up1"
        id="dropdown-button-drop-up"
        drop="up"
        variant="secondary"
        title={t("about_g20")}
      >
        <Dropdown.Item
          className="mt-3"
          eventKey="1"
          onClick={() => {
            setPageIndex(1);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {t("overview")}
        </Dropdown.Item>

        <Dropdown.Item
          className="mt-3"
          eventKey="2"
          onClick={() => {
            setPageIndex(2);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {t("g20_members")}
        </Dropdown.Item>

        <Dropdown.Item
          className="my-3"
          eventKey="3"
          onClick={() => {
            setPageIndex(3);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {t("previous_summits")}
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        className="g20_india2023-footer font_para_en"
        key="up2"
        id="dropdown-button-drop-up"
        drop="up"
        variant="secondary"
        title={t("g20_india2023")}
      >
        <Dropdown.Item
          className="mt-3"
          eventKey="1"
          onClick={() => {
            setPageIndex(4);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {t("logo_theme")}
        </Dropdown.Item>

        <Dropdown.Item
          className="my-3"
          eventKey="2"
          onClick={() => {
            setPageIndex(5);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {t("ndsummit")}
        </Dropdown.Item>
      </DropdownButton>

      <div
        className="explore-footer font_para_en"
        key="up3"
        id="dropdown-button-drop-up"
        drop="up"
        variant="secondary"
        title={t("explore_india")}
        onClick={() => {
          setPageIndex(6);
        }}
      >
        <div
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {t("explore_india")}
        </div>
      </div>
    </>
  );
}

export default Footer;
