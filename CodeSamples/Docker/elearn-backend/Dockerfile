FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /dhondhu
COPY . .
RUN <<EOF
dotnet restore
dotnet build --configuration Release
dotnet publish -c Release -o ./publish
EOF

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS kaushlesh
WORKDIR /dotnet_artifacts
COPY --from=build /dhondhu/publish .
ENTRYPOINT dotnet ElearnBackend.dll