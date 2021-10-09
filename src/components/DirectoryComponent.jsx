import React from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";

import CampsiteInfo from "./CampsiteInfoComponent";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsite: null,
    };
  }

  onCampsiteSelect(campsite) {
    this.setState({ selectedCampsite: campsite });
  }

  // renderSelectedCampsite(campsite) {
  //   if (campsite) {
  //     return (
  //       <Card>
  //         <CardImg top src={campsite.image} alt={campsite.name} />
  //         <CardBody>
  //           <CardTitle>{campsite.name}</CardTitle>
  //           <CardText>{campsite.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   }
  // }

  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <CampsiteInfo campsite={this.state.selectedCampsite} />
      </div>
    );
  }
}

export default Directory;
