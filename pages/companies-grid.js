
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";

export default function CompaniesGrid() {
    return (
        <>
            <Layout>
                <div>
                    
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                    <div className="content-page">
                                        
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-1.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Car Toys</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>66</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>12</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-2.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Carols Daughter</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>18</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">kandy</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>25</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-3.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Amazon</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>52</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">mulathiw</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>54</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-4.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Baseball Savings</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>85</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">maradana</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>6</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-5.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Ashford</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>25</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">kurunegala</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>67</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-6.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Callaway Golf</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>34</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>45</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-7.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Percepta</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>97</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Chinatown, Singpore</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>64</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-8.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Exela Movers</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>67</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>87</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-9.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Ibotta, Inc</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>45</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>23</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-1.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Wanderu </a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>08</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>45</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-2.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Aceable, Inc.</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>54</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>67</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-3.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Intrepid Travel</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>123</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>53</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-4.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Defendify </a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>64</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>56</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-5.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Twisters </a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>34</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>66</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-6.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Fireworks</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>12</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>12</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-1.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Car Toys</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>66</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">colombo</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>12</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-2.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Carols Daughter</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>18</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">kandy</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>25</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-3.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Amazon</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>52</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Tokyo,Japan</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>54</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-4.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Baseball Savings</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>85</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Chicago, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>6</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-5.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Ashford</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>25</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Toronto, Italia</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>67</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-6.png" alt="jobscribes" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Callaway Golf</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobscribes" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>34</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">San Francisco, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>45</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
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
                                        <img src="assets/imgs/template/newsletter-left.png" alt="jobscribes" />
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
                                        <img src="assets/imgs/template/newsletter-right.png" alt="jobscribes" />
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
