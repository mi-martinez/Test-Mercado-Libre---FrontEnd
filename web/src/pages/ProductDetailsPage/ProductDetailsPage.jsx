import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProductDetailsPage = () => {
  return (
    <>
      <MetaTags title="ProductDetails" description="ProductDetails page" />

      <h1>ProductDetailsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ProductDetailsPage/ProductDetailsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>productDetails</code>, link to me with `
        <Link to={routes.productDetails()}>ProductDetails</Link>`
      </p>
    </>
  )
}

export default ProductDetailsPage
