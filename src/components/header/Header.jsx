import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ReactCountryFlag from "react-country-flag";
import { COLORS } from "../../configs/constants";
import crazyGrillHeader from "../../../public/assets/logo/crazy_grill_header.png";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import LanguageContext from "../state/language";

const Header = ({ isStatic }) => {
    const { t, i18n } = useTranslation(); // Add i18n here
    const [isFacebookHover, setIsFacebookHover] = useState(false);
    const [isInstagramHover, setIsInstagramHover] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(null);
    const location = useLocation().pathname;
    const { language, setLanguage } = useContext(LanguageContext);

    const coloredHeader = {
        backgroundColor: COLORS.primary,
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 5px -7px",
        transition: "all 0.2s ease-in"
    };
    const styles = {
        mobileHeader: { float: "left", width: "45vw", backgroundColor: COLORS.primary }
    };
    const transparentHeader = {
        background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0,0, 0.9))",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 5px -7px",
        transition: "all 0.2s ease-out"
    };
    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        setScrollHeight(scrollPosition);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const changeLanguageHandler = lang => {
        i18n.changeLanguage(lang); // Use i18n to change language
        setLanguage(lang);
    };

    return (
        <Navbar
            expand="md"
            className="mb-3 menu"
            sticky={isStatic || scrollHeight >= "70" ? "top" : null}
            style={
                ({ marginBottom: "0rem !important", position: "relative" },
                isStatic || scrollHeight >= 70 ? coloredHeader : transparentHeader)
            }
        >
            <Container>
                <Navbar.Brand href="#">
                    <div id="logo">
                        <img src={crazyGrillHeader} alt="Crazy Grill" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="start"
                    style={styles.mobileHeader}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md}`}></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow">
                            <Link to={"/"}>
                                <Nav.Link
                                    className="navLink"
                                    href="/"
                                    style={location === "/" ? { borderBottom: "2px solid #c0946c" } : null}
                                >
                                    {t("HEADER.HOME")}
                                </Nav.Link>
                            </Link>
                            <Link to={"/menu"}>
                                <Nav.Link
                                    className="navLink"
                                    href="/menu"
                                    style={location === "/menu" ? { borderBottom: "2px solid #c0946c" } : null}
                                >
                                    {t("HEADER.MENU")}
                                </Nav.Link>
                            </Link>
                            <Link to={"/events"}>
                                <Nav.Link
                                    className="navLink"
                                    href="/events"
                                    style={location === "/events" ? { borderBottom: "2px solid #c0946c" } : null}
                                >
                                    {t("HEADER.EVENTS")}
                                </Nav.Link>
                            </Link>
                            <Link to={"/contact"}>
                                <Nav.Link
                                    className="navLink"
                                    href="/contact"
                                    style={location === "/contact" ? { borderBottom: "2px solid #c0946c" } : null}
                                >
                                    {t("HEADER.CONTACT")}
                                </Nav.Link>
                            </Link>
                            <NavDropdown
                                title={
                                    language === "en"
                                        ? t("HEADER.ENGLISH")
                                        : language === "hi"
                                        ? t("HEADER.HINDI")
                                        : t("HEADER.TELUGU")
                                }
                                id="offcanvasNavbarDropdown-expand-md"
                            >
                                <NavDropdown.Item
                                    className="navDropdownItem"
                                    onClick={() => changeLanguageHandler("en")}
                                    hidden={language === "en"}
                                >
                                    {t("HEADER.ENGLISH")} <ReactCountryFlag countryCode="GB" svg />
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="navDropdownItem"
                                    onClick={() => changeLanguageHandler("hi")}
                                    hidden={language === "hi"}
                                >
                                    {t("HEADER.HINDI")} <ReactCountryFlag countryCode="IN" svg />
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="navDropdownItem"
                                    onClick={() => changeLanguageHandler("te")}
                                    hidden={language === "te"}
                                >
                                    {t("HEADER.TELUGU")} <ReactCountryFlag countryCode="IN" svg />
                                </NavDropdown.Item>
                            </NavDropdown>
                            <div className="headerSocialMedia">
                                <Facebook
                                    color={isFacebookHover ? "#4267B2" : "#fff"}
                                    size={24}
                                    className="icons"
                                    onMouseEnter={() => setIsFacebookHover(true)}
                                    onMouseLeave={() => setIsFacebookHover(false)}
                                />
                                <Instagram
                                    color={isInstagramHover ? "#E1306C" : "#fff"}
                                    size={24}
                                    className="icons"
                                    onMouseEnter={() => setIsInstagramHover(true)}
                                    onMouseLeave={() => setIsInstagramHover(false)}
                                />
                            </div>
                            <div id="logoMobileHeader">
                                <img src={crazyGrillHeader} alt="Crazy Grill" />
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;

