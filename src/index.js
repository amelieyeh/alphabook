import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import base from './base';
import App from './App';
import Notebook from './Notebook/Notebook';
import NotFound from './NotFound';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class Root extends Component {
  constructor() {
    super();

    this.addNotebook = this.addNotebook.bind(this);
    this.updateNotebook = this.updateNotebook.bind(this);

    this.state = {
      notebooks: {}
    }
  }

	componentWillMount() {
    this.ref = base.syncState(`user1/notebooks`,
      {
        context: this,
        state: 'notebooks'
      }
    );
    /*
    this.ref = base.database().ref(`user1/`).on('child_added', (snapshot) => {
      const notebooks = snapshot.val();
      this.setState({
        notebooks: notebooks
      });
    });*/
	}

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addNotebook(notebook) {
    // update state
    const notebooks = {...this.props.notebooks};
    // add new notebook
    const timestamp = Date.now();
    notebooks[`notebook-${timestamp}`] = notebook;
    // set state
    this.setState({ notebooks });
  }

  updateNotebook(notebookId, updatedNotebook) {
    const notebooks = {...this.state.notebooks};
    notebooks[notebookId] = updatedNotebook;
    base.update(`user1/notebooks/${notebookId}`, {
      data: {
        title: updatedNotebook.title,
        language: updatedNotebook.language
      },
    });

    this.setState({
      notebooks: notebooks,
    });
  }

  render() {
    const notebooks = this.state.notebooks;
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/"
            render={() => <App
              notebooks={notebooks}
              addNotebook={this.addNotebook}
              updateNotebook={this.updateNotebook}/>}
          />
          <Route path="/:id"
            render={routeProps => <Notebook
              notebooks={notebooks}
              id={routeProps.match.params.id} />}
          />
          <Route miss path="/" component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
