import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Content.css';
import graph from '../assets/Assets/Hero_Image_(Desktop_View).png';
import twitter from '../assets/Assets/Twitter.svg';
import userAvatars from '../utilities/avatars';

const Content = () => {
  let inlineAvatarsPos = 0;

  return (
    <div className="Content-body bg-cream">
      <div className="container-md py-5">
        <div className="row">
          <div className="col">
            <h1 className="display-3">
              <b>Twitter analytics taken to a whole new level.</b>
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
              {userAvatars.map(
                (val, index) => (
                  (inlineAvatarsPos -= 20),
                  (
                    <img
                      src={val}
                      alt={val}
                      style={
                        index > 0
                          ? { left: inlineAvatarsPos }
                          : { position: 'relative' }
                      }
                    />
                  )
                )
              )}
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
