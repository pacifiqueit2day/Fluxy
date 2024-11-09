import { useEffect, useRef, useState } from "react"
import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import english from "../../assets/icons/english.png";
import fresh from "../../assets/icons/fresh.png";
import useLocalStorage from "../../hooks/useLocalStorage";

const LangSwitcher = ({ selectedLanguage, setSelectedLanguage }) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage, i18n]);

    return (
        <div className="flex gap-1">
            <div>
                <IconButton
                    sx={{ padding: 0 }}
                    onClick={() => setSelectedLanguage("en")}
                    className={`${
                        selectedLanguage === "en" ? "border-2 border-border" : ""
                      }`}
                >
                    <img src={english} alt="" className="img-fluid bg-white rounded-full" width="30" />
                </IconButton>
            </div>
            <div>
                <IconButton
                    sx={{ padding: 0 }}
                    onClick={() => setSelectedLanguage("fr")}
                    className={`${
                        selectedLanguage === "fr" ? "border-2 border-border" : ""
                      }`}
                >
                    <img src={fresh} alt="" className="img-fluid bg-white rounded-full" width="30" />
                </IconButton>
            </div>
        </div>
    )
}

export default LangSwitcher
