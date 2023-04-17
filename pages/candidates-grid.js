
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";

export default function CandidateGrid() {
    return (
        <>
            <Layout>
                <div>

                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="content-page">
                                
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobscribes" src="assets/imgs/page/candidates/user1.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>william code</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Python developer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">As an experienced UX Designer, I can help your company create engaging digital experiences that keep your users coming back. I offer insights and design solutions that will help you achieve your goals. Whether you need to redesign an existing product or create something new from scratch, I bring creativity, passion, and expertise to every project. Let's work together to create something amazing and make your users happy!</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobscribes" src="assets/imgs/page/candidates/user2.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>Cody Fisher</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Python developer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">As an experienced UX Designer, I can help your company create engaging digital experiences that keep your users coming back. I offer insights and design solutions that will help you achieve your goals. Whether you need to redesign an existing product or create something new from scratch, I bring creativity, passion, and expertise to every project. Let's work together to create something amazing and make your users happy!</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Hire Me
                                                             </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobscribes" src="assets/imgs/page/candidates/user3.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>Jerome Bell</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Content Manager</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">As an experienced UX Designer, I can help your company create engaging digital experiences that keep your users coming back. I offer insights and design solutions that will help you achieve your goals. Whether you need to redesign an existing product or create something new from scratch, I bring creativity, passion, and expertise to every project. Let's work together to create something amazing and make your users happy!</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                        <div className="col-6">
                                                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Hire Me
                                                             </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobscribes" src="assets/imgs/page/candidates/user4.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>Jane Cooper</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Network</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">As an experienced UX Designer, I can help your company create engaging digital experiences that keep your users coming back. I offer insights and design solutions that will help you achieve your goals. Whether you need to redesign an existing product or create something new from scratch, I bring creativity, passion, and expertise to every project. Let's work together to create something amazing and make your users happy!</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobscribes" src="assets/imgs/page/candidates/user5.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>Floyd Miles</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Photo Editing</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">As an experienced UX Designer, I can help your company create engaging digital experiences that keep your users coming back. I offer insights and design solutions that will help you achieve your goals. Whether you need to redesign an existing product or create something new from scratch, I bring creativity, passion, and expertise to every project. Let's work together to create something amazing and make your users happy!</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobscribes" src="assets/imgs/page/candidates/user6.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>Devon Lane</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Online Marketing</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">As an experienced UX Designer, I can help your company create engaging digital experiences that keep your users coming back. I offer insights and design solutions that will help you achieve your goals. Whether you need to redesign an existing product or create something new from scratch, I bring creativity, passion, and expertise to every project. Let's work together to create something amazing and make your users happy!</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobscribes" src="assets/imgs/page/candidates/user7.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>Jerome Bell</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">As an experienced UX Designer, I can help your company create engaging digital experiences that keep your users coming back. I offer insights and design solutions that will help you achieve your goals. Whether you need to redesign an existing product or create something new from scratch, I bring creativity, passion, and expertise to every project. Let's work together to create something amazing and make your users happy!</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobscribes" src="assets/imgs/page/candidates/user9.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>
                                                            <h5>Theresa</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobscribes" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">As an experienced UX Designer, I can help your company create engaging digital experiences that keep your users coming back. I offer insights and design solutions that will help you achieve your goals. Whether you need to redesign an existing product or create something new from scratch, I bring creativity, passion, and expertise to every project. Let's work together to create something amazing and make your users happy!</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">colombo</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="mt-50">
                                <div className="box-swiper style-nav-top">
                                    <BlogSlider />
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-20">
                        <div className="container">
                            <div className="box-newsletter">
                                <div className="row">
                                    <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/template/newsletter-left.png" alt="joxBox" />
                                    </div>
                                    <div className="col-lg-12 col-xl-6 col-12">
                                        <h2 className="text-md-newsletter text-center">
                                            New Things Will Always
                                            <br /> Update Regularly
                                        </h2>
                                        <div className="box-form-newsletter mt-40">
                                            <form className="form-newsletter">
                                                <input className="input-newsletter" type="text" placeholder="Enter your email here" />
                                                <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/template/newsletter-right.png" alt="joxBox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
