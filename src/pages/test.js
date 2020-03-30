import React from "react"
import { navigate } from 'gatsby';

export default () => <div>
    Test Page
    <button onClick={() => navigate("/")}>
        Navigate to home page
    </button>
</div>
