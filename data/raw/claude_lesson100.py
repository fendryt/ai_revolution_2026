```python
import anthropic

client = anthropic.Anthropic(
    api_key="your-api-key-here"
)

message = client.messages.create(
    model="claude-sonnet-4-5-20250929",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "Will Okta (OKTA) stock likely increase or decrease before the next quarterly earnings announcement? What factors should I consider?"
        }
    ]
)

print(message.content[0].text)
```


```bash
curl https://api.anthropic.com/v1/messages \
  -H "content-type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-sonnet-4-5-20250929",
    "max_tokens": 1024,
    "messages": [
      {
        "role": "user",
        "content": "Will Okta (OKTA) stock likely increase or decrease before the next quarterly earnings announcement? What factors should I consider?"
      }
    ]
  }'
```