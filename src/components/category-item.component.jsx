import './category-item.styles.scss';

const CategoryItem = ({category}) => {
  const { imageUrl, title } = category;
  return(
    <div class="category-container">
      <div class="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      </div>
      <div class="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
};


export default CategoryItem;