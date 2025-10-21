# LSTM-Based Weather Predictor (Basic)

This repository contains a basic implementation of a weather predictor using an LSTM (Long Short-Term Memory) neural network. While the description was originally missing, this project likely aims to forecast weather conditions based on historical data.

## Key Features & Benefits

*   **Data Handling:** Utilizes `pandas` for data manipulation and analysis (in `df.py` and `forecast.py`).
*   **API Integration:** Fetches real-time weather data from the OpenWeatherMap API (likely intention in `fetch.js`).
*   **Database Storage:** Stores and retrieves weather data from MongoDB (evident in `fetch.js`, `forecast.py`, and `index.js`).
*   **LSTM-Based Prediction:** Implements weather forecasting using an LSTM model (in `forecast.py`).
*   **Frontend Interface:** Provides a simple HTML interface to trigger predictions (in `home.html`).

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Python:** (version 3.6 or higher)
    *   `pandas`
    *   `pymongo`
    *   `scikit-learn` (`sklearn`)
    *   `tensorflow`
*   **Node.js:** (version 12 or higher)
    *   `mongodb`
    *   `dotenv`
*   **MongoDB:** (Local or cloud instance)
*   **OpenWeatherMap API Key:** (Required to fetch weather data)

## Installation & Setup Instructions

Follow these steps to set up the project:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/aayush2789/lstm_based_weather_predictor-basic-.git
    cd lstm_based_weather_predictor-basic-
    ```

2.  **Set up Python environment:**

    ```bash
    # Option 1: Using virtualenv (recommended)
    python3 -m venv venv
    source venv/bin/activate  # On Linux/macOS
    venv\Scripts\activate  # On Windows

    # Option 2: Install directly (not recommended)
    pip install pandas pymongo scikit-learn tensorflow
    ```

3.  **Set up Node.js environment:**

    ```bash
    npm install
    ```

4.  **Configure Environment Variables:**

    *   Create a `.env` file in the root directory.
    *   Add the following variables to the `.env` file:

        ```
        MONGO_URI=<Your MongoDB Connection String>
        WEATHER_API_KEY=<Your OpenWeatherMap API Key>
        ```
    *   Replace `<Your MongoDB Connection String>` with your actual MongoDB connection string.  This string should include the username, password, and database details.  Example: `mongodb+srv://<user>:<password>@cluster0.example.mongodb.net/<database_name>?retryWrites=true&w=majority`.  The existing code snippets suggest using the string: `mongodb+srv://aayuk279:qwerty123@cluster0.y8lt7.mongodb.net/?retryWrites=true&w=majority` and database name `weather_db`. Make sure to replace the placeholders with your actual credentials.

    *   Replace `<Your OpenWeatherMap API Key>` with your actual API key obtained from [OpenWeatherMap](https://openweathermap.org/).

5. **Database Setup**
   * Create a database named `weather_db` and `shop` in your MongoDB instance (if it doesn't already exist).

## Usage Examples

1.  **Running the Python scripts:**

    *   `df.py`: Demonstrates basic `pandas` DataFrame creation.

        ```bash
        python df.py
        ```

    *   `forecast.py`:  Fetches data from the database, scales the data, and likely loads and uses an LSTM model to predict weather.

        ```bash
        python forecast.py
        ```

2.  **Running the Node.js scripts:**

    *   `fetch.js`: Fetches weather data from the OpenWeatherMap API and stores it in MongoDB.

        ```bash
        node fetch.js
        ```
    * `index.js`: Connects to MongoDB database and performs database operations.

        ```bash
        node index.js
        ```

3.  **Running the Frontend:**

    *   Serve the `home.html` file using a simple HTTP server (e.g., using Python):

        ```bash
        python -m http.server
        ```

        Then, open `http://localhost:8000/home.html` in your browser. This will display a basic webpage with a button. You'll likely need to connect this frontend button with the Python backend or create a node.js based backend to trigger the weather prediction model.
       *Note: You will need to adapt the index.js file to serve the html page for the front end.  You can use express.js library to perform the same.*

## Configuration Options

*   **MongoDB Connection String:**  Can be configured in the `.env` file (`MONGO_URI`).
*   **OpenWeatherMap API Key:** Can be configured in the `.env` file (`WEATHER_API_KEY`).
*   **Latitude and Longitude:**  Modify the `lat` and `lon` variables in `fetch.js` to fetch weather data for a different location.
*   **Database Names and Collections:**  Configure database names and collection names (e.g., `database_name` and `collection_name` in `forecast.py`) to match your MongoDB setup.

## Contributing Guidelines

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Submit a pull request.

## License Information

No license is specified for this project. Consider adding a license such as MIT or Apache 2.0 to clarify the terms of use. If no license is specified, then by default, the copyright holder reserves all rights.

## Acknowledgments

*   [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
*   [MongoDB](https://www.mongodb.com/) for the database solution.
*   [TensorFlow](https://www.tensorflow.org/) for the machine learning framework.
