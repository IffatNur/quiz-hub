import React from 'react';

const Blog = () => {
    return (
      <div className="w-4/6 mx-auto h-screen mt-12">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-yellow-100">
            What is the purpose using of react router?
          </div>
          <div className="collapse-content">
            <p>
              React Router is a state container for the current location , or
              URL. It keeps track of the location and renders different Routes
              as it changes, and it also provides tools to update the location
              using Links and the history API. React Router, and dynamic,
              client-side routing, allows us to build a single-page web
              application with navigation without the page refreshing as the
              user navigates. React Router uses component structure to call
              components, which display the appropriate information.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-yellow-100">
            How does Context API work?
          </div>
          <div className="collapse-content">
            <p>
              Context provides a way to pass data through the component tree
              without having to pass props down manually at every level.In a
              typical React application, data is passed top-down parent to child
              via props, but such usage can be cumbersome for certain types of
              props that are required by many components within an application.
              Context provides a way to share values like these between
              components without having to explicitly pass a prop through every
              level of the tree.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-yellow-100">
            Details of useRef() hook
          </div>
          <div className="collapse-content">
            <p>
              How does useRef work in React? useRef returns a mutable ref object
              whose .current property is initialized to the passed argument (
              initialValue ). The returned object will persist for the full
              lifetime of the component. Essentially, useRef is like a “box”
              that can hold a mutable value in its .current property.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;