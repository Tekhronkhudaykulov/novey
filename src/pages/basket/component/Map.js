import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
// import "../../assets/scss/_orders.scss";
import { geocodeByPlaceId } from "react-places-autocomplete";

const Map = ({ onClickMapsValue, onClickCoordinateValue, active = false }) => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 41.290686,
    lng: 69.177176,
  });

  useEffect(() => {}, [address]);

  const handleSelect = async (value, placeId, suggestion) => {
    // const results = await geocodeByAddress(value);
    const results = await geocodeByPlaceId(placeId);
    const latLng = await getLatLng(results[0]);
    onClickMapsValue(value);
    onClickCoordinateValue(latLng);
    setAddress(value);
    setCoordinates(latLng);
  };
  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "100%",
    height: "350px",
  };
  const apikey = "AIzaSyAoud-_7sLGaEDVV5s8QvtTeGzI9dunLqU";
  return (
    <div>
      <PlacesAutocomplete
        bounds={coordinates}
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              {active && (
                <>
                  <span class="form-group-input__label">Адресс</span>
                  <div
                    className="input-autocomplete"
                    style={{ marginTop: "10px" }}
                  >
                    <input
                      className="inputProps"
                      {...getInputProps({ placeholder: "Ведите адресc" })}
                    />
                  </div>
                  <div>
                    {loading ? <div>...loading</div> : ""}
                    {suggestions
                      .filter(
                        (sugg) =>
                          sugg.formattedSuggestion.secondaryText.includes(
                            "Уз"
                          ) ||
                          sugg.formattedSuggestion.secondaryText.includes("Uzb")
                      )
                      .map((suggestion) => {
                        const style = {
                          backgroundColor: suggestion.active
                            ? "#41b6e6"
                            : "#fff",
                        };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, { style })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
          );
        }}
      </PlacesAutocomplete>
      <LoadScriptNext googleMapsApiKey={apikey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={13}
          center={coordinates}
          onUnmount={onUnmount}
          ref={setMap}
        >
          {coordinates && (
            <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }} />
          )}
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
};

export default Map;
