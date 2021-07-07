# skeleton-loader
A simple and light-weight skeleton loader in React which works for almost all of its use cases

## Building a skeleton loader React component
Building a skeleton loader as a re-usable React component can have multiple approaches.
One naive approach is to create a waves loader CSS and apply to the respective React components when they are in loading state. For example:

```
<p className={isLoading ? “waves-loader” : “”}>Lorem ipsum text</p>
```

Ideally, we would want a wrapper component which can take care of everything with only one prop – `isLoading`. To implement this component, we might have two options. First, the components should be able to read its children JSX/DOM structure, and based on that it can substitute the HTML tags with respective equivalents. For example:

```
<SkeletonLoader isLoading={isLoading}>
  <p>Some text</p>
  <img src=”some-image.png” alt=”some-image”/>
</SkeletonLoader>
```

Now, inside the SkeletonLoader component, it will replace the paragraph tag with a simple line and image tag with a square. Another option is to send the JSX structure as a new prop.

...

With an assumption that every loader element will be shown in a separate line to start with, I have another approach for this ideal scenario. Instead of checking the structure, we can pass a config object similar to as shown below:

```
{
      line: “2 100%”,
      square: “1 50px”,
      circle: “1 20px”,
      line: “1 50%”,
}
```

The first value is the count of the keys and the second is the width value. So, for the first item, it should result in two 100% skeleton lines. We can still come up with a better config syntax.

The advantage with this config based system is that, if we have some common cards or UIs, we can store the common config in a constant file and use it when needed. 

For example, if we have a common config that results in one square and 3 lines but we want 4 lines, passing the common config as the following would work:

```
{
  ...commonConfig,
  line: “1 50%”,
}
```

Both the ideal approaches were beyond the scope of this project.

## Building a skeleton loader React component in half a day?
I have taken a different approach from all the above-mentioned approaches to build the required component. The idea is to build the JSX structure in the components where the loader is to be shown.

```
<div className="card-wrapper"> {isLoading ? (
  <React.Fragment>
    <SkeletonLoader width="300px" height="180px" />
    <SkeletonLoader count={2} />
    <SkeletonLoader width="50%" />
  </React.Fragment>
  ): (
  <React.Fragment>
    <img
      src="https://vignette.wikia.nocookie.net/LEGO.png"
      width="300px"
      height="180px"
      alt="Lego logo"
    />
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.
    </p> <p>Lorem ipsum</p>
  </React.Fragment>
  )}
</div>
```

There is only one skeleton loader component that can handle the display of different types of loaders shapes based on the props. It can help in creating rectangles/squares of all sizes, circles of all sizes, and applying extra CSS. It is easier to use and has a negligible learning curve. Additionally, with minimal setup and cleaner syntax, we can cover most of the cases for a rich loader experience.

Do check out the application which shows this component in action.

## How to run the application?

1. npm install
2. npm start

The app opens at `http://localhost:3000/`
