import PlaceholderSection from "./PlaceholderSection";
import { Link } from "react-router-dom";

export default function Section5() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white pt-16 md:pt-17.5 pb-16">
            <div className="absolute w-[80%] h-20 left-1/2 -translate-x-1/2 translate-y-10 text-center border-4 border-blue-700 rounded-2xl p-4 mt-2">
                <h1 className="text-4xl font-bold text-blue-700">
                    Sẵn sàng chinh phục công việc mơ ước?
                </h1>
            </div>
            <div className="absolute flex justify-center items-center gap-10 w-[80%] h-80 left-1/2 -translate-x-1/2 translate-y-30 text-center rounded-2xl p-4 mt-2">
                <img className="absolute left-5 -bottom-8 -rotate-15 z-0"
                    src="/images/decorative2.png"
                    alt="Decorative artwork"
                    style={{ width: "20%", height: "auto" }}
                ></img>
                <img
                    className="z-5"
                    src="/images/decorative1.png"
                    alt="Decorative artwork"
                    style={{ width: "30%", height: "auto" }}
                ></img>
                <img
                    className="absolute left-1/2 -translate-x-1/2 translate-y-7"
                    src="/images/mascotthinking.png"
                    style={{ width: "25%", height: "auto" }}
                ></img>
                <div className="flex justify-center items-center h-30 w-[40%] border-5 border-blue-500 rounded-3xl translate-x-42 text-blue-400 text-3xl text-left p-5">
                    <p>
                        Đăng ký miễn phí ngay và<br /> nhận <b>1 lần mô phỏng thử!</b>

                    </p>
                </div>
                <div className="absolute w-115 h-20 -bottom-6 right-0 flex justify-between items-center">
                    <div className="h-full w-[40%] flex justify-center items-center bg-blue-600 rounded-2xl text-white text-center">
                        <Link
                            to="/register"
                            className="text-white no-underline text-3xl font-semibold"
                        > Bắt đầu
                        </Link>
                    </div>
                    <div className="h-full w-[55%] flex justify-center items-center bg-white border-4 border-blue-600 rounded-2xl text-white text-center">
                        <Link
                            to="/pricing"
                            className="text-blue-600 no-underline text-3xl font-semibold"
                        > Xem bảng giá
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute w-full h-36 bottom-0 pb-2 bg-linear-to-r from-[#4170df] via-[#4f77d4] to-[#7da6df]">
                <div className="absolute w-full h-25 top-0 flex justify-around items-center">
                    <div className="flex flex-col items-start flex-wrap wrap-normal text-white">
                        <h2 className="font-bold text-lg">Joblens</h2>
                        <p className="wrap-normal text-sm">Trải nghiệm thực tế <br /> nghề nghiệp với AI </p>
                    </div>
                    <div className="flex flex-col items-start flex-wrap text-white mt-5">
                        <h2 className="font-bold text-lg">Điều hướng</h2>
                        <Link
                            className="wrap-normal text-sm"
                            to="/about"
                        >
                            Về Joblens
                        </Link>
                        <Link
                            className="wrap-normal text-sm"
                            to="/services"
                        >
                            Dịch vụ
                        </Link>
                        <Link
                            className="wrap-normal text-sm"
                            to="/info"
                        >
                            Thông tin
                        </Link>
                    </div >
                    <div className="flex flex-col items-start flex-wrap text-white">
                        <h2 className="font-bold text-lg">Liên hệ</h2>
                        <p className="wrap-normal text-sm">joblens@gmail.com</p>
                        <p className="wrap-normal text-sm">(+84) 789 423 779</p>
                    </div>
                    <div className="flex flex-col items-start flex-wrap text-white">
                        <h2 className="font-bold text-lg">Kết nối với Joblens</h2>
                        <p className="wrap-normal text-sm">Facebook</p>
                        <p className="wrap-normal text-sm">Tiktok</p>
                    </div>
                </div>
                <div
                    className="mt-3 h-px w-[90%] opacity-50 left-1/2 -translate-x-1/2 bg-white absolute bottom-7"

                />
                <div className="absolute w-full h-5 bottom-0 -translate text-white text-center mb-1">© 2026 Joblens Trải nghiệm nghề nghiệp</div>
            </div>
        </section >
    );
}
