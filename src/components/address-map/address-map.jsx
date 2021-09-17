import React from "react";
import PropTypes from "prop-types";
import {Map, Placemark} from "react-yandex-maps";

const AddressMap = (props) => {
  const {onMapClick, placemarkCoordinates} = props;
  return (
    <div className="map">
      <Map
        defaultState={{center: [54.318700, 48.397640], zoom: 10}}
        width={820}
        height={500}
        modules={[`geocode`]}
        onClick={(evt) => {
          const coordinates = evt.get(`coords`);
          onMapClick(coordinates);
        }}
      >
        {placemarkCoordinates.length !== 0 &&
        <Placemark
          geometry={placemarkCoordinates}
        >
        </Placemark>
        }
      </Map>
    </div>
  );
};

AddressMap.propTypes = {
  onMapClick: PropTypes.func.isRequired,
  placemarkCoordinates: PropTypes.array.isRequired,
};

export default AddressMap;


