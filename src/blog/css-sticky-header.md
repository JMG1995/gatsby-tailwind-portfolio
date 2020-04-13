---
path: '/blog/css-sticky-header'
date: '2020-04-13'
title: 'Quick Tip: Creating a sticky header.'
categories: ['CSS', 'Quick Tip']
featuredImage: './images/feature-css-sticky-header.jpg'
---

A common feature request when creating a website is the inclusion of a sticky header. Today, we'll setup a basic navigational header and demonstrate the sticky effect.

<!-- end -->

<p><a href="#sticky-css">Click here</a> to skip everything else and see the code that makes this work, or <a href="https://codepen.io/joeygrillz/pen/xxwGxKo?editors=0100" target="_blank" rel="noopener noreferrer">view the Codepen</a> with the finished product.</p>

<h4>Setting Up The Header</h4>
<p>The first thing we need to do is write the HTML for the header. In the interest of keeping it simple and getting up and running quickly, we'll keep it basic.</p>

```html
<header>
	<nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</nav>
</header>
```

<p>Now our HTML structure is set, but it doesn't look anything like a header yet. Let's add a quick bit of CSS to sort fix that.</p>

```css
header {
	background: #fdca40;
	padding: 10px 0;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

nav,
ul {
	display: flex;
	align-items: center;
}

nav {
	margin: 0 30px;
	justify-content: flex-end;
}

li {
	list-style-type: none;
	margin: 0 5px;
}

a {
	/* Change the default underline and color */
	text-decoration: none;
	color: #161616;
}
```

<p>Much better. Before we make our header sticky, let's add a little bit of content so that we will be able to clearly see our sticky header working. Under the header in your HMTL file, add the following code:</p>

```html
<main>
	<h1>Lorem ipsum dolor</h1>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
		delectus suscipit animi neque ipsum repudiandae facere aut quam autem,
		praesentium totam nobis eveniet quae enim aperiam ipsa repellat blanditiis
		harum!
	</p>
	<p>
		Sapiente accusamus eveniet iusto ut beatae dolore ad alias aperiam ratione
		ipsam similique, fuga totam officiis sed perferendis consequatur nemo? Sit
		amet consectetur adipisicing elit. Distinctio.
	</p>
</main>
```

<p>This should give you some content underneath the header. This will help us clearly see the sticky effect.</p>
<p>We will also add a little bit of CSS to keep it tidy and ensure the page will definitely scroll:</p>

```css
/* This is just so we can get a scrollbar to show the sticky effect  */
body {
	height: 1200px;
}

main {
	margin: 0 30px;
}
```

<h4 id="sticky-css">Making It Sticky</h4>
<p>Everything is ready to go and is just awaiting our navigation being made sticky. You'll be glad to know this part is actually very straightforward and is only the following 2 lines of CSS, which should be added to your header element.</p>

```css
header {
	position: sticky;
	top: 0;
}
```

<p>If you scroll you should now see your header should remain fixed to the top of the page, no matter how far down you scroll.</p>
<p><strong>Note: </strong>Depending on your site, you may need to up the z-index of the header to ensure it has the highest priority and will sit above all other content. For more information on that, check out this <a href="https://css-tricks.com/almanac/properties/z/z-index/" target="_blank" rel="noopener noreferrer">explanation by Sara Cope</a> or the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index" target="_blank" rel="noopener noreferrer">official MDN docs.</a></p>

<h4>Sticky vs Fixed</h4>
<p>The difference between sticky and fixed is a subtle but important when building a feature like this. To put it simply, you can think of sticky being relative and fixed being absolute. An element that is given a fixed position will be taken out of the original document flow and always remain in the specified position. However an element with a position of sticky can be seen as relative, and so will remain in the original document flow.</p>

<p>This can be seen in our example, where the content we added sits nicely below the header when the user is at the top of the page. If you were to swap this to fixed, the content would rise up to the top of document and sit underneath the header, meaning the first part is cut off from view.</p>

<p>Apply the changes below to see how this works:</p>

```css
header {
	/* position: sticky; */
	position: fixed;
	top: 0;

	/* We also need to specify the width, 
  ** otherwise it will only be as wide as the content dictates */
	width: 100%;
}
```

If you notice anything incorrect with this article, please feel free to <a href="https://github.com/JMG1995/gatsby-tailwind-portfolio/blob/master/src/blog/css-sticky-header.md" target="_blank" rel="noopener noreferrer">make a pull request</a> or just let me know <a href="/contact">here</a>.
