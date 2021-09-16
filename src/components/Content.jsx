import React from 'react';
import './Content.css';
import graph from '../assets/Assets/Hero_Image_(Desktop_View).png';
import twitter from '../assets/Assets/Twitter.svg';
import userAvatars from '../utilities/avatars';

const Content = () => {
  let inlineAvatarsPos = 0;

  return (
    <div className="Content-body bg-cream py-5">
      <div className="container-md">
        <div className="row">
          <div className="col">
            <div className="sec1-col1">
              <h1 className="display-3">
                <strong>Twitter analytics taken to a whole new level.</strong>
              </h1>
              <p>
                Chirp is a suite of Twitter analytics that will help you better
                undestand your audience, whice tweets they like, and most
                importantly, when they are the msot active Twitter.
              </p>
              <div>
                <button className="btn btn-primary">
                  <img src={twitter} className="me-2" alt="twitter" />
                  Sign in with Twitter
                </button>
                <a href="#">Learn more</a>
              </div>
              <div className="inline-avatars">
                {userAvatars.map((val, index) => (
                  <img
                    src={val}
                    key={index}
                    alt={val}
                    style={
                      index > 0
                        ? { left: (inlineAvatarsPos -= 20) }
                        : { position: 'relative' }
                    }
                  />
                ))}
              </div>
              <p>
                Join <strong className="text-darkteal">195</strong> others who
                have analyzed their followers and scheduled{' '}
                <strong className="text-darkteal">1342</strong> tweets!
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <img src={graph} style={ContentStyle.imgGraph} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentStyle = {
  imgGraph: {
    width: 450,
  },
};

export default Content;
