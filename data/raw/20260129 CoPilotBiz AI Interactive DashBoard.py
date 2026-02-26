import dash
from dash import dcc, html
import plotly.express as px
import pandas as pd

# --- Data ---
data = {
    "Metric": [
        "GenAI Regular Usage (McKinsey 2024)",
        "AI in ≥1 Business Function",
        "Tech Sector AI Adoption",
        "Financial Services Adoption",
        "Healthcare Adoption"
    ],
    "Value": [65, 40, 72, 67, 61]
}

df = pd.DataFrame(data)

# --- Dashboard App ---
app = dash.Dash(__name__)

fig = px.bar(
    df,
    x="Metric",
    y="Value",
    title="AI Adoption Across Sectors and Use Cases",
    labels={"Value": "Adoption (%)"},
    color="Value",
    color_continuous_scale="Blues"
)

fig.update_layout(xaxis_tickangle=-30)

app.layout = html.Div([
    html.H1("AI Adoption & Impact Dashboard", style={"textAlign": "center"}),

    html.Div([
        html.P(
            "Explore how organizations across industries are adopting AI. "
            "Use the interactive chart below to compare adoption levels and identify trends."
        )
    ]),

    dcc.Graph(figure=fig),

    html.Div([
        html.H3("Insights"),
        html.Ul([
            html.Li("Tech leads with 72% adoption, reflecting AI’s role in core product development."),
            html.Li("Financial services follow closely at 67%, driven by automation and risk modeling."),
            html.Li("Healthcare adoption (61%) is accelerating due to diagnostics and workflow automation."),
            html.Li("Generative AI usage has surged, with 65% of organizations using it regularly."),
        ])
    ])
])

if __name__ == "__main__":
    app.run_server(debug=True)
