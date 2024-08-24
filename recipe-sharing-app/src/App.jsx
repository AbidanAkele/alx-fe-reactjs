import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            } 
          />
          <Route path="/recipe/:id" render={({ match }) => (
            <RecipeDetails recipeId={Number(match.params.id)} />
          )} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
