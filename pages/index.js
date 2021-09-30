import React from 'react';
import Layout from '../components/Layout';
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      {/* Header Card */}
      <header className="row" style={{ marginTop:'20px'}}>
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <img src="/ryan-ray-profile2.jpeg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Ryan Ray</h1>
                <h3>Full Stack Developer</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae atque ullam perferendis harum, nisi porro voluptate,
                  iste consequuntur enim reprehenderit architecto consectetur cum?
                  Totam ad molestias natus illum illo officia.
                </p>
                <Link href="/hireme">
                  <a className="btn btn-outline-light">Hire Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default Index
