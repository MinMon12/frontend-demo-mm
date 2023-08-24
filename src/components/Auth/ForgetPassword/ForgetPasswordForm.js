import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import PrimaryButton from "../../UI/PrimaryButton";
import BackButton from "../../UI/BackButton";

const ForgetPasswordFormPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedOption = searchParams.get("selectedOption");

    switch (selectedOption) {
        case "mobile number":
            return (
                <Card>
                    <BackButton></BackButton>
                    <form>
                        <Input label="Your Phone" text="text" placeholder="(+95)9XXXXXXXXX" />
                        <p className="text-sm text-white mt-2">(Please enter the mobile number you registered City Rewards with)</p>
                        <PrimaryButton>GET OTP</PrimaryButton>
                    </form>
                </Card>
            );
        case "nrc":
            return (
                <Card>
                    <BackButton></BackButton>
                    <form>
                        <Input label="NRC" text="NRC" placeholder="example :12/KaMaTa(N)123456" />
                        <PrimaryButton>GET OTP</PrimaryButton>
                    </form>
                </Card>
            );
        case "old nrc":
            return (
                <Card>
                    <BackButton></BackButton>
                    <form>
                        <Input label="Old NRC" text="Old NRC" placeholder="example :ABC 123456" />
                        <PrimaryButton>GET OTP</PrimaryButton>
                    </form>
                </Card>
            );
        case "passport":
            return (
                <Card>
                    <BackButton></BackButton>
                    <form>
                        <Input label="Passport" text="Passport" placeholder="example :MMR12345678" />
                        <PrimaryButton>GET OTP</PrimaryButton>
                    </form>
                </Card>
            );
        default:
            return null;
    }
}

export default ForgetPasswordFormPage;
