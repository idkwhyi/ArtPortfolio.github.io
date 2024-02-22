import PropTypes from 'prop-types';

const Image = ({ src, alt }) => {
    return (
        <div className="flex justify-center items-center h-screen p-3">
            <img
                src={src}
                alt={alt}
                className="object-contain max-w-5xl max-h-full"
            />
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;