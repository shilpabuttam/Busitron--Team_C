import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";


const Dashboard = () => {
    const [metrics, setMetrics] = useState([]);
    const [filteredMetrics, setFilteredMetrics] = useState([]);
    const [region, setRegion] = useState("All");
    const [timePeriod, setTimePeriod] = useState("All");

    useEffect(() => {
        // Fetch metrics data from the server
        axios.get("http://localhost:5000/api/videos").then((res) => {
            setMetrics(res.data);
            setFilteredMetrics(res.data);
        });
    }, []);

    useEffect(() => {
        // Apply filters
        let data = metrics;

        if (region !== "All") {
            data = data.filter((item) => item.region === region);
        }

        if (timePeriod !== "All") {
            // Example: Time filter logic
            const now = new Date();
            if (timePeriod === "Last Week") {
                data = data.filter((item) => now - new Date(item.timestamp) <= 7 * 24 * 60 * 60 * 1000);
            }
            if (timePeriod === "Last Month") {
                data = data.filter((item) => now - new Date(item.timestamp) <= 30 * 24 * 60 * 60 * 1000);
            }
        }

        setFilteredMetrics(data);
    }, [region, timePeriod, metrics]);

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
                Content Analytics Dashboard
            </Typography>

            {/* Filters */}
            <Box sx={{ display: "flex", gap: 2, marginBottom: "20px" }}>
                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel>Region</InputLabel>
                    <Select value={region} onChange={(e) => setRegion(e.target.value)}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="North America">North America</MenuItem>
                        <MenuItem value="Europe">Europe</MenuItem>
                        <MenuItem value="Asia">Asia</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel>Time Period</InputLabel>
                    <Select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Last Week">Last Week</MenuItem>
                        <MenuItem value="Last Month">Last Month</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Bar Chart */}
            <BarChart width={800} height={400} data={filteredMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#8884d8" />
                <Bar dataKey="likes" fill="#82ca9d" />
            </BarChart>
        </Box>
    );
};

export default Dashboard;
