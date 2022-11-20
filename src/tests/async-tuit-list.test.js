import {Tuits} from "../components/tuits/index";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

test('tuit list renders async', async () => {
    const tuits = await findAllTuits();
    render(
        <HashRouter>
          <Tuits tuits={tuits}/>
        </HashRouter>
    );
    const linkElement = screen.getByText(/@SpaceX/i);
    expect(linkElement).toBeInTheDocument();
  });