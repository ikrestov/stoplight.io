import React from 'react';
import { withRouteData, Link } from 'react-static';

import '@styles/case-study.scss';

const CaseStudy = ({ title, description, logo, path }, key) => {
  return (
    <section key={key} className="w-full sm:p-3 md:p-4 lg:p-6 flex">
      <div className="w-full sm:p-2 md:p-8 overflow-hidden shadow-lg bg-white flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 flex lg:justify-center items-start p-8">
          <img src={logo} alt={title} />
        </div>

        <div className="w-full lg:w-1/2 p-8">
          <h1 className="h-text-2xl mb-6">{title}</h1>

          <p className="mb-8 max-w-md">{description}</p>

          <Link
            to={`/case-studies/${path}`}
            className="h-button--green h-button inline-block text-center text-white font-bold py-2 px-4 rounded"
          >
            View
          </Link>
        </div>
      </div>
    </section>
  );
};

class CaseStudies extends React.Component {
  render() {
    const { caseStudies } = this.props;

    return (
      <div>
        <div className="main flex items-stretch">
          <div className="h-diagonal-stripes flex w-full">
            <div className="h-skewed-bg h-skewed-bg--bordered flex items-center w-full">
              <section className="container mx-auto text-center text-white">
                <h1 className="h-text-5xl mb-8">Case Studies</h1>

                <p className="max-w-lg mx-auto h-text-md font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed sapien orci.
                  Nulla congue, sem at dapibus facilisis, purus metus hendrerit diam, tincidunt
                  finibus eros libero eget ex.
                </p>
              </section>
            </div>
          </div>
        </div>

        <section className="container mx-auto py-4 flex flex-wrap space-between relative z-10">
          {caseStudies.map(CaseStudy)}
        </section>

        <div className="h-gap">
          <p className="max-w-lg mx-auto h-text-2xl font-semibold font-bold text-center mb-8 px-4">
            Some kind of clever call to action that drives people to this button.
          </p>

          <div className="text-center py-8">
            <Link
              to="https://next.stoplight.io"
              title="Signup"
              className="h-button inline-block h-bg-purple h-button text-white font-bold py-4 px-8 hover:text-white"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouteData(CaseStudies);
